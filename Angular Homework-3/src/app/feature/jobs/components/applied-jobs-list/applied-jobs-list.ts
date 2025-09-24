import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsService } from '../../../../core/services/jobs.service';
import { Job } from '../../../../core/models/jobs.model';
import { JobItemComponent } from '../job-item/job-item';

@Component({
  selector: 'app-applied-jobs-list',
  standalone: true,
  imports: [CommonModule, JobItemComponent],
  templateUrl: './applied-jobs-list.html',
  styleUrls: ['./applied-jobs-list.scss']
})
export class AppliedJobsListComponent {
  private jobsService = inject(JobsService);

  appliedJobs = this.jobsService.appliedJobs;

  onCancel(job: Job) {
    this.jobsService.cancel(job);
  }
}