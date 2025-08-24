import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsService } from '../../../../core/services/jobs.service';

@Component({
  selector: 'app-job-info-panel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="info-panel">
      <p>Total Available: {{ jobsService.totals().available }}</p>
      <p>Total Applied: {{ jobsService.totals().applied }}</p>
    </div>
  `,
  styles: [`
    .info-panel { background: #f8f8f8; padding: 1rem; margin-bottom: 1rem; border-radius: 8px; }
  `]
})
export class JobInfoPanelComponent {
  jobsService = inject(JobsService);
}