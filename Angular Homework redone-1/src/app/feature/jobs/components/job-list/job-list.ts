import { Component, inject } from '@angular/core';
import { JobsService } from '../../../../core/services/jobs.service';
import { Job } from '../../../../core/models/jobs.model';
import { JobItemComponent } from "../job-item/job-item";

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.html',
  styleUrls: ['./job-list.scss'],
  imports: [JobItemComponent]
})
export class JobListComponent {
  private jobsService = inject(JobsService);

  jobs = this.jobsService.availableJobs;

  onApply(job: Job) {
    this.jobsService.apply(job);
  }
}