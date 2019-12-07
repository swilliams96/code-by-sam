import { Component, OnInit, OnDestroy, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-new-project-page',
  templateUrl: './admin-new-project-page.component.html',
  styleUrls: ['./admin-new-project-page.component.scss']
})
export class AdminNewProjectPageComponent implements OnInit, OnDestroy {
  projectForm: FormGroup;
  host: string;
  private _slugValueChangeSubscription: Subscription;

  constructor() {}

  ngOnInit() {
    this._initialiseProjectForm();
    this.host = window.location.host;
  }

  ngOnDestroy() {
    if (this._slugValueChangeSubscription) {
      this._slugValueChangeSubscription.unsubscribe();
    }
  }

  submit() {
    // do stuff
  }

  recalculateSlugValue(event: Event) {
    const newValue = (event.target as HTMLInputElement).value;
    console.log(newValue);
    this.projectForm.setValue({
      ...this.projectForm.value,
      slug: newValue
        .toLowerCase()
        .replace(/([^A-Za-z0-9\-])/g, '-')
        .replace(/\-+/g, '-')
    });
  }

  private _initialiseProjectForm() {
    this.projectForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      slug: new FormControl('', [Validators.required]),
      url: new FormControl(''),
      date: new FormControl(''),
      // images?: new FormGroup({}),
      tags: new FormControl('')
    });

    if (this._slugValueChangeSubscription) {
      this._slugValueChangeSubscription.unsubscribe();
    }

    // this._slugValueChangeSubscription = this.projectForm.valueChanges.subscribe(value => {
    //   console.log(value.slug);

    // });
  }
}
