// Modules, etc.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
// Components
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { ProjectListItemComponent } from './components/project-list-item/project-list-item.component';
import { ProjectTagsComponent } from './components/project-tags/project-tags.component';
import { ProjectDetailsPageComponent } from './components/project-details-page/project-details-page.component';
import { TagDetailsPageComponent } from './components/tag-details-page/tag-details-page.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
