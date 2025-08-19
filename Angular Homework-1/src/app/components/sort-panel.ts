import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-sort-panel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="sort-panel">
      <label>Sort by: </label>
      <button (click)="sort('salary')">Salary</button>
      <button (click)="sort('workType')">Work Type</button>
    </div>
  `,
  styles: [`
    .sort-panel {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin: 1rem 0;
    }
  `]
})
export class SortPanelComponent {
  constructor(private jobService: JobService) {}

  sort(by: 'salary' | 'workType') {
    this.jobService.sortJobs(by);
  }
}