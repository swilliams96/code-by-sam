import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private readonly _firestorePath: string = 'projects';

  private _projects: BehaviorSubject<Project[]> = new BehaviorSubject([]);
  projects$: Observable<Project[]> = this._projects.asObservable();
  get projects(): Project[] {
    return this._projects.value;
  }

  constructor(private firestore: AngularFirestore) {
    this.firestore
      .collection(this._firestorePath)
      .valueChanges()
      .subscribe(projects => this._projects.next(projects as Project[]));
  }
}
