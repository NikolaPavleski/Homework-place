import { Component, inject } from '@angular/core';
import { JobsService } from '../../../../core/services/jobs.service';

@Component({
  selector: 'app-job-sort-panel',
  templateUrl: './job-sort-panel.html',
  styleUrls: ['./job-sort-panel.scss']
})
export class JobSortPanelComponent {
  private jobsService = inject(JobsService);

  sortBySalaryAsc() { this.jobsService.sortBySalaryAsc(); }
  sortByWorkType() { this.jobsService.sortByWorkType(); }
}