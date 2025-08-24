import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsService } from '../../../../core/services/jobs.service';
import { JobItemComponent } from '../job-item/job-item';

@Component({
  selector: 'app-applied-jobs-list',
  standalone: true,
  imports: [CommonModule, JobItemComponent],
  template: `
    <app-job-item
      *ngFor="let job of jobsService.appliedJobs()"
      [job]="job"
      (cancel)="jobsService.cancel($event)">
    </app-job-item>
  `
})
export class AppliedJobsListComponent {
  jobsService = inject(JobsService);
}