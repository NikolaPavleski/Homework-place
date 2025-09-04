import { Injectable, signal, computed } from '@angular/core';
import { Job } from '../models/jobs.model';
import { mockJobs } from './mock-jobs';

@Injectable({ providedIn: 'root' })
export class JobsService {
  private readonly _jobs = signal<Job[]>(mockJobs);

  readonly jobs = computed(() => this._jobs());
  readonly availableJobs = computed(() => this._jobs().filter(j => !j.isApplied));
  readonly appliedJobs = computed(() => this._jobs().filter(j => j.isApplied));

  readonly totals = computed(() => ({
    available: this.availableJobs().length,
    applied: this.appliedJobs().length,
  }));
  getAvailableJobs: any;

  apply(job: Job) {
    this._jobs.update(list => list.map(j => j.id === job.id ? { ...j, isApplied: true } : j));
  }

  cancel(job: Job) {
    this._jobs.update(list => list.map(j => j.id === job.id ? { ...j, isApplied: false } : j));
  }

  sortBySalaryAsc() {
    this._jobs.update(list => [...list].sort((a, b) => a.startingSalary - b.startingSalary));
  }

  sortByWorkType() {
    this._jobs.update(list => [...list].sort((a, b) => a.workType.localeCompare(b.workType)));
  }
}