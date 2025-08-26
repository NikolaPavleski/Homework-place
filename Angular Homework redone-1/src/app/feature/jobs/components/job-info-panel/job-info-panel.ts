import { Component, inject } from '@angular/core';
import { JobsService } from '../../../../core/services/jobs.service';

@Component({
  selector: 'app-job-info-panel',
  templateUrl: './job-info-panel.html',
  styleUrls: ['./job-info-panel.scss']
})
export class JobInfoPanelComponent {
  private jobsService = inject(JobsService);

  totals = this.jobsService.totals;
}