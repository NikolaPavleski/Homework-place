import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsService } from '../../../../core/services/jobs.service';
import { JobItemComponent } from '../job-item/job-item';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [CommonModule, JobItemComponent],
  template: `
    <app-job-item
      *ngFor="let job of jobsService.availableJobs()"
      [job]="job"
      (apply)="jobsService.apply($event)">
    </app-job-item>
  `
})
export class JobListComponent {
  jobsService = inject(JobsService);
}