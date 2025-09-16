import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { JobsComponent } from './feature/jobs/jobs/jobs';
import { ProfileComponent } from './pages/profile/profile';
import { CompanyComponent } from './pages/company/company';
import { NotFoundComponent } from './pages/not-found/not-found';
import { AddJobComponent } from './/pages/add-job/add-job';
import { EditJobComponent } from './pages/edit-job/edit-job';
import { ContactComponent } from './feature/jobs/contact/contact';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'jobs/add', component: AddJobComponent },
  { path: 'jobs/edit/:id', component: EditJobComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'company/:id', component: CompanyComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NotFoundComponent }
];