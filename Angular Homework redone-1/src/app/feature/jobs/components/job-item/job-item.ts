import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Job } from '../../../../core/models/jobs.model';

@Component({
  selector: 'app-job-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="job-card">
      <div class="summary">
        <h3>{{ job.position }}</h3>
        <p>{{ job.company }}</p>
        <p>Money: {{ job.startingSalary | currency }}</p>
        <p>Work Type: {{ job.workType }}</p>
        <button (click)="toggleDetails()">
          {{ showDetails() ? 'Hide details' : 'Show details' }}
        </button>
        <button *ngIf="!job.isApplied" (click)="apply.emit(job)">Apply</button>
        <button *ngIf="job.isApplied" (click)="cancel.emit(job)">Cancel</button>
      </div>

      <div *ngIf="showDetails()" class="details">
        <p><strong>Location:</strong> {{ job.location }}, {{ job.country }}</p>
        <p><strong>Qualifications:</strong> {{ job.qualifications }}</p>
        <p><strong>Description:</strong> {{ job.description }}</p>
        <p><strong>Expires:</strong> {{ job.expires }}</p>
      </div>
    </div>
  `,
  styles: [`
    .job-card { border: 1px solid #ccc; padding: 1rem; margin-bottom: 1rem; border-radius: 8px; }
    .summary { display: flex; flex-direction: column; gap: 0.5rem; }
    .details { margin-top: 0.5rem; font-size: 0.9rem; color: #444; }
    button { margin-right: 0.5rem; }
  `]
})
export class JobItemComponent {
  @Input() job!: Job;
  @Output() apply = new EventEmitter<Job>();
  @Output() cancel = new EventEmitter<Job>();

  showDetails = signal(false);

  toggleDetails() {
    this.showDetails.update(v => !v);
  }
}