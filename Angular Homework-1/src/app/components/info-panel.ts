import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-info-panel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="info-panel">
      Total Jobs: {{ totalJobs() }} |
      Applied: {{ appliedJobs() }}
    </div>
  `,
  styles: [`
    .info-panel {
      text-align: center;
      margin: 1rem 0;
      font-weight: bold;
    }
  `]
})
export class InfoPanelComponent {
  constructor(private jobService: JobService) {}

  totalJobs = computed(() => this.jobService.getJobsSignal()().length);
  appliedJobs = computed(() => this.jobService.appliedJobs.length);
}