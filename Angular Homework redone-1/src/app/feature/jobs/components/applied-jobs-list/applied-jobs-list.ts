import { Component, inject } from '@angular/core';
import { JobsService } from '../../../../core/services/jobs.service';
import { Job } from '../../../../core/models/jobs.model';
import { JobItemComponent } from "../job-item/job-item";

@Component({
  selector: 'app-applied-jobs-list',
  templateUrl: './applied-jobs-list.html',
  styleUrls: ['./applied-jobs-list.scss'],
  imports: [JobItemComponent]
})
export class AppliedJobsListComponent {
  private jobsService = inject(JobsService);

  jobs = this.jobsService.appliedJobs;

  onCancel(job: Job) {
    this.jobsService.cancel(job);
  }
}