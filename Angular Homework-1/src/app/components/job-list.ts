import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobItemComponent } from './job-item';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [CommonModule, JobItemComponent],
  template: `
    <div>
      <h2>Available Jobs</h2>
      <ng-container *ngFor="let job of jobs()">
        <app-job-item 
          [job]="job" 
          (apply)="apply(job)" 
        />
      </ng-container>
    </div>
  `
})
export class JobListComponent {
  constructor(private jobService: JobService) {}

  jobs = computed(() => this.jobService.availableJobs);

  apply(job: any) {
    this.jobService.applyToJob(job);
  }
}