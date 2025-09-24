import { Component, input, output, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { Job } from '../../../../core/models/jobs.model';

@Component({
  selector: 'app-job-item',
  standalone: true,
  imports: [RouterLink, CurrencyPipe, DatePipe],
  templateUrl: './job-item.html',
  styleUrls: ['./job-item.scss']
})
export class JobItemComponent {
  job = input.required<Job>();

  apply = output<Job>();
  cancel = output<Job>();

  private readonly _expanded = signal(false);
  expanded = this._expanded.asReadonly();

  private readonly _logoOverride = signal<string | null>(null);

  logoSrc = computed(() => {
    const override = this._logoOverride();
    if (override) return override;
    const j = this.job();
    return (j && j.companyLogo) ? j.companyLogo : this.placeholder;
  });
  placeholder: any;

  toggleDetails() {
    this._expanded.update(v => !v);
  }

  onApply() {
    const j = this.job();
    if (j) this.apply.emit(j);
  }

  onCancel() {
    const j = this.job();
    if (j) this.cancel.emit(j);
  }

  onLogoError() {
    this._logoOverride.set(this.placeholder);
  }
}