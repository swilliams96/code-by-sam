import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-dashboard-page.component.html',
  styleUrls: ['./admin-dashboard-page.component.scss']
})
export class AdminDashboardPageComponent implements OnInit {
  constructor(private angularFireAuth: AngularFireAuth, private router: Router) {}

  ngOnInit() {}

  signOutOfGoogle() {
    this.angularFireAuth.auth.signOut().then(() => this.router.navigateByUrl('/admin/login'));
  }
}
