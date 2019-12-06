import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-layout-page',
  templateUrl: './admin-layout-page.component.html',
  styleUrls: ['./admin-layout-page.component.scss']
})
export class AdminLayoutPageComponent implements OnInit {
  user$: Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth, private router: Router) {}

  ngOnInit() {
    this.user$ = this.angularFireAuth.user;
  }

  signOut() {
    this.angularFireAuth.auth.signOut().then(() => this.router.navigateByUrl('/admin/login'));
  }
}
