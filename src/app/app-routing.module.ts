import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LayoutPageComponent } from './components/portfolio/layout-page/layout-page.component';
import { HomePageComponent } from './components/portfolio/home-page/home-page.component';
import { ProjectDetailsPageComponent } from './components/portfolio/project-details-page/project-details-page.component';
import { TagDetailsPageComponent } from './components/portfolio/tag-details-page/tag-details-page.component';
import { AdminLayoutPageComponent } from './components/admin/admin-layout-page/admin-layout-page.component';
import { AdminLoginPageComponent } from './components/admin/admin-login-page/admin-login-page.component';
import { AdminDashboardPageComponent } from './components/admin/admin-dashboard/admin-dashboard-page.component';
import { AdminNewProjectPageComponent } from './components/admin/admin-new-project-page/admin-new-project-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'projects/:slug', component: ProjectDetailsPageComponent },
      { path: 'tags/:tag', component: TagDetailsPageComponent },
      { path: 'contact', redirectTo: '/', pathMatch: 'full' }
    ]
  },
  { path: 'admin/login', component: AdminLoginPageComponent },
  {
    path: 'admin',
    component: AdminLayoutPageComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: AdminDashboardPageComponent },
      { path: 'projects/new', component: AdminNewProjectPageComponent },
      { path: '**', redirectTo: '/admin', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })]
})
export class AppRoutingModule {}
