import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobItemComponent } from './job-item';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-applied-jobs',
  standalone: true,
  imports: [CommonModule, JobItemComponent],
  template: `
    <div>
      <h2>Applied Jobs</h2>
      <ng-container *ngFor="let job of jobs()">
        <app-job-item 
          [job]="job" 
          (cancel)="cancel(job)"
        />
      </ng-container>
    </div>
  `
})
export class AppliedJobsComponent {
  constructor(private jobService: JobService) {}

  jobs = computed(() => this.jobService.appliedJobs);

  cancel(job: any) {
    this.jobService.cancelApplication(job);
  }
}