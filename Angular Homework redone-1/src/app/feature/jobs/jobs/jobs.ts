import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobListComponent } from '../components/job-list/job-list';
import { AppliedJobsListComponent } from '../components/applied-jobs-list/applied-jobs-list';
import { JobInfoPanelComponent } from '../components/job-info-panel/job-info-panel';
import { JobSortPanelComponent } from '../components/job-sort-panel/job-sort-panel';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [
    CommonModule,
    JobListComponent,
    AppliedJobsListComponent,
    JobInfoPanelComponent,
    JobSortPanelComponent
  ],
  template: `
    <div class="job-seeker-app grid grid-cols-3 gap-4 p-4">
      <app-job-info-panel class="col-span-3"></app-job-info-panel>
      <app-job-sort-panel class="col-span-3"></app-job-sort-panel>

      <section class="col-span-2">
        <h2>Available Jobs</h2>
        <app-job-list></app-job-list>
      </section>

      <aside class="col-span-1">
        <h2>Applied Jobs</h2>
        <app-applied-jobs-list></app-applied-jobs-list>
      </aside>
    </div>
  `
})
export class JobsComponent {}