import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProjectDetailsPageComponent } from './components/project-details-page/project-details-page.component';
import { TagDetailsPageComponent } from './components/tag-details-page/tag-details-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'projects/:slug', component: ProjectDetailsPageComponent },
  { path: 'tags/:tag', component: TagDetailsPageComponent },
  { path: 'contact', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: HomePageComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: []
})
export class AppRoutingModule {}
