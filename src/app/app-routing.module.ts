import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProjectDetailsPageComponent } from './components/project-details-page/project-details-page.component';
import { TagDetailsPageComponent } from './components/tag-details-page/tag-details-page.component';
import { AdminLoginPageComponent } from './components/admin-login-page/admin-login-page.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { LayoutPageComponent } from './components/layout-page/layout-page.component';
import { AuthGuard } from './guards/auth.guard';

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
    canActivate: [AuthGuard],
    children: [
      { path: '', component: AdminPageComponent },
      { path: '**', redirectTo: '/admin', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })]
})
export class AppRoutingModule {}
