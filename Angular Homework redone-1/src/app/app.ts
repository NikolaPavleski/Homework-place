import { Component } from '@angular/core';
import { JobsComponent } from './feature/jobs/jobs/jobs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [JobsComponent],
  template: `
    <h1 class="text-2xl font-bold mb-4">JOB SEEKER</h1>
    <app-jobs></app-jobs>
  `
})
export class AppComponent {}