import { Component, EventEmitter, Input, Output, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Job } from '../models/job.model';

@Component({
  selector: 'app-job-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-item.component.html',
  styleUrls: ['./job-item.component.scss']
})
export class JobItemComponent {
  @Input() job!: Job;
  @Output() apply = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  expanded = signal(false);

  toggleExpand() {
    this.expanded.update(prev => !prev);
  }
}