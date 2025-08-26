import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { Job } from '../../../../core/models/jobs.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-job-item',
  templateUrl: './job-item.html',
  styleUrls: ['./job-item.scss'],
  imports: [CurrencyPipe]
})
export class JobItemComponent {
  @Input({ required: true }) job!: Job;
  @Output() apply = new EventEmitter<Job>();
  @Output() cancel = new EventEmitter<Job>();

  private readonly _expanded = signal(false);
  expanded = this._expanded.asReadonly();

  toggleDetails() {
    this._expanded.update(v => !v);
  }

  onApply() {
    this.apply.emit(this.job);
  }

  onCancel() {
    this.cancel.emit(this.job);
  }
}