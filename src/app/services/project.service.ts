import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private readonly _firestorePath: string = 'projects';
  private readonly _storagePath: string = 'projects';

  private _projects: BehaviorSubject<Project[]> = new BehaviorSubject([]);
  projects$: Observable<Project[]> = this._projects.asObservable();
  get projects(): Project[] {
    return this._projects.value;
  }

  constructor(private firestore: AngularFirestore, private storage: AngularFireStorage) {
    this.firestore
      .collection(this._firestorePath)
      .valueChanges()
      .subscribe(projects => this._projects.next(projects as Project[]));
  }

  /** Saves a project as a document in Firestore. */
  async saveProject(project: Project, images: Image[]): Promise<void> {
    // First upload all the images for the project.
    project.images = await this._saveProjectImages(project.slug, images);

    // Then save the project as a document in Firestore.
    await this.firestore
      .collection(this._firestorePath)
      .doc(project.slug)
      .set(project)
      .then(() => console.log('Saved project details for project', project.slug))
      .catch(err => {
        console.error(`Failed to save project ${project.slug} to Firestore`, err, project);
        throw err;
      });
  }

  /** Deletes a project from the Firestore. */
  async deleteProject(project: Project) {
    await this.firestore
      .collection(this._firestorePath)
      .doc(project.slug)
      .delete();

    const storageRef = this.storage.ref(`${this._storagePath}/${project.slug}`);
    for (const image of project.images) {
      await storageRef.child(image).delete();
    }
  }

  /**
   * Saves new images to a project
   * @returns All of the URLs for each of the project's images.
   */
  private async _saveProjectImages(projectSlug: string, images: Image[]): Promise<string[]> {
    if (!projectSlug) {
      console.error('Project slug required to save project images.');
    }

    if (!images || !images.length) {
      console.warn('No images provided when saving project with slug', projectSlug);
    }

    console.log('Saving project images for project with slug', projectSlug, images);

    const project = this.projects.find(x => x.slug === projectSlug);
    const storageRef = this.storage.ref(`${this._storagePath}/${projectSlug}`);
    const result: string[] = [];

    if (project) {
      console.log('    Existing project found, deleting missing images...');
      for (const existingImage of project.images || []) {
        if (!images.find(x => x.url === existingImage)) {
          // Remove any deleted existing images
          console.log('    Image: ', existingImage);
          const imageRef = storageRef.child(existingImage);
          const deleteResult = await imageRef.delete();
          console.log('Deleting image...', typeof imageRef, typeof deleteResult, deleteResult);
        } else {
          // Keep track of the remaining ones
          result.push(existingImage);
        }
      }
    }

    // Add any new images
    console.log('    Uploading new images...');
    for (const image of images.filter(x => !x.exists && !!x.data)) {
      const fileName = `${Guid.create().toString()}`;
      const uploadResult = await storageRef.child(fileName).putString(image.data, 'data_url');

      console.log(`        ${fileName} (${uploadResult.state})`);

      if (uploadResult.state.toLowerCase() === 'success') {
        result.push(fileName);
      }
    }

    return result;
  }
}
