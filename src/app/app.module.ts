// Modules, etc.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AuthGuard } from './guards/auth.guard';
// Components
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/portfolio/home-page/home-page.component';
import { HeroSectionComponent } from './components/portfolio/hero-section/hero-section.component';
import { NavbarComponent } from './components/portfolio/navbar/navbar.component';
import { AboutSectionComponent } from './components/portfolio/about-section/about-section.component';
import { ProjectsSectionComponent } from './components/portfolio/projects-section/projects-section.component';
import { ProjectListItemComponent } from './components/portfolio/project-list-item/project-list-item.component';
import { ProjectTagsComponent } from './components/portfolio/project-tags/project-tags.component';
import { ProjectDetailsPageComponent } from './components/portfolio/project-details-page/project-details-page.component';
import { TagDetailsPageComponent } from './components/portfolio/tag-details-page/tag-details-page.component';
import { LoadingSpinnerComponent } from './components/portfolio/loading-spinner/loading-spinner.component';
import { AdminLoginPageComponent } from './components/admin/admin-login-page/admin-login-page.component';
import { AdminDashboardPageComponent } from './components/admin/admin-dashboard/admin-dashboard-page.component';
import { LayoutPageComponent } from './components/portfolio/layout-page/layout-page.component';
import { AdminLayoutPageComponent } from './components/admin/admin-layout-page/admin-layout-page.component';
import { AdminProjectListComponent } from './components/admin/admin-project-list/admin-project-list.component';
import { AdminNewProjectPageComponent } from './components/admin/admin-new-project-page/admin-new-project-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminLoadingSpinnerComponent } from './components/admin/admin-loading-spinner/admin-loading-spinner.component';
import { AdminProjectsPageComponent } from './components/admin/admin-projects-page/admin-projects-page.component';
import { AdminProjectListItemComponent } from './components/admin/admin-project-list-item/admin-project-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    ProjectDetailsPageComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    ProjectsSectionComponent,
    ProjectListItemComponent,
    ProjectTagsComponent,
    TagDetailsPageComponent,
    LoadingSpinnerComponent,
    AdminLoginPageComponent,
    AdminDashboardPageComponent,
    LayoutPageComponent,
    AdminLayoutPageComponent,
    AdminProjectListComponent,
    AdminNewProjectPageComponent,
    AdminLoadingSpinnerComponent,
    AdminProjectsPageComponent,
    AdminProjectListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgbModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
