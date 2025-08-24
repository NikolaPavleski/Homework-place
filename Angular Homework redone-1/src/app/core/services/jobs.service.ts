import { Injectable, signal, computed } from '@angular/core';
import { Job } from '../models/jobs.model';
import { mockJobs } from './mock-jobs';

@Injectable({ providedIn: 'root' })
export class JobsService {
  jobs = signal<Job[]>(mockJobs);

  appliedJobs = computed(() => this.jobs().filter(j => j.isApplied));
  availableJobs = computed(() => this.jobs().filter(j => !j.isApplied));

  totals = computed(() => ({
    available: this.availableJobs().length,
    applied: this.appliedJobs().length
  }));

  apply(job: Job) {
    this.jobs.update(jobs =>
      jobs.map(j => j === job ? { ...j, isApplied: true } : j)
    );
  }

  cancel(job: Job) {
    this.jobs.update(jobs =>
      jobs.map(j => j === job ? { ...j, isApplied: false } : j)
    );
  }

  sortBySalary() {
    this.jobs.update(jobs =>
      [...jobs].sort((a, b) => a.startingSalary - b.startingSalary)
    );
  }

  sortByWorkType() {
    this.jobs.update(jobs =>
      [...jobs].sort((a, b) => a.workType.localeCompare(b.workType))
    );
  }
}