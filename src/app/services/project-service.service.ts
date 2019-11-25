import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, mapTo } from 'rxjs/operators';

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
      .subscribe(x => this._projects.next(x as Project[]));
  }
}
