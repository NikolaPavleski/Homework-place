import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobListComponent } from './components/job-list';
import { AppliedJobsComponent } from './components/applied-jobs';
import { InfoPanelComponent } from './components/info-panel';
import { SortPanelComponent } from './components/sort-panel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    JobListComponent,
    AppliedJobsComponent,
    InfoPanelComponent,
    SortPanelComponent
  ],
  template: `
    <h1 class="title">JOB SEEKER</h1>
    <app-info-panel />
    <app-sort-panel />
    <div class="lists-container">
      <app-job-list />
      <app-applied-jobs />
    </div>
  `,
  styles: [`
    .title {
      text-align: center;
      font-size: 2rem;
      margin: 1rem 0;
    }
    .lists-container {
      display: flex;
      gap: 2rem;
      padding: 1rem;
    }
  `]
})
export class AppComponent {}