import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-admin-login-page',
  templateUrl: './admin-login-page.component.html',
  styleUrls: ['./admin-login-page.component.scss']
})
export class AdminLoginPageComponent implements OnInit {
  error: string;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {}

  signInWithGoogle() {
    this.angularFireAuth.auth
      .signInWithPopup(new auth.GoogleAuthProvider())
      .then(() => this.router.navigateByUrl('/admin'))
      .catch(err => {
        this.error = err.code;
        console.error(err);
        this.changeDetectorRef.detectChanges();
      });
  }
}
