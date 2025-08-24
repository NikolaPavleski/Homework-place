import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsService } from '../../../../core/services/jobs.service';

@Component({
  selector: 'app-job-sort-panel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="sort-panel">
      <button (click)="jobsService.sortBySalary()">Sort by Salary</button>
      <button (click)="jobsService.sortByWorkType()">Sort by Work Type</button>
    </div>
  `,
  styles: [`
    .sort-panel { margin-bottom: 1rem; }
    button { margin-right: 0.5rem; }
  `]
})
export class JobSortPanelComponent {
  jobsService = inject(JobsService);
}