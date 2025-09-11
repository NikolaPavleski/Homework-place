import { Component, signal, input, output } from '@angular/core';
import { Job } from '../../../../core/models/jobs.model';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-job-item',
  templateUrl: './job-item.html',
  styleUrls: ['./job-item.scss'],
  imports: [CurrencyPipe, DatePipe, RouterLink],
  standalone: true
})
export class JobItemComponent {
  job = input.required<Job>();

  apply = output<Job>();
  cancel = output<Job>();

  private readonly _expanded = signal(false);
  expanded = this._expanded.asReadonly();

  toggleDetails() {
    this._expanded.update(v => !v);
  }

  onApply() {
    this.apply.emit(this.job());
  }

  onCancel() {
    this.cancel.emit(this.job());
  }
}