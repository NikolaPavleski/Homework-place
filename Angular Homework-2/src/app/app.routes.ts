import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { JobsComponent } from './feature/jobs/jobs/jobs';
import { ProfileComponent } from './pages/profile/profile';
import { CompanyComponent } from './pages/company/company';
import { NotFoundComponent } from './pages/not-found/not-found';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'company/:id', component: CompanyComponent },
  { path: '**', component: NotFoundComponent }
];