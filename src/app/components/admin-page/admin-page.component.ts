import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  constructor(private angularFireAuth: AngularFireAuth, private router: Router) {}

  ngOnInit() {}

  signOutOfGoogle() {
    this.angularFireAuth.auth.signOut().then(() => this.router.navigateByUrl('/admin/login'));
  }
}
