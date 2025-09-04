import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JobsService } from '../../../../core/services/jobs.service';
import { JobItemComponent } from '../job-item/job-item';
import { JobFilterPipe } from '../../../../core/pipes/job-filter.pipe';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.html',
  styleUrls: ['./job-list.scss'],
  imports: [CommonModule, FormsModule, JobItemComponent, JobFilterPipe]
})
export class JobListComponent {
  private jobsService = inject(JobsService);

  jobs = this.jobsService.availableJobs;

  searchTerm = '';

  onApply(job: any) {
    this.jobsService.apply(job);
  }
}