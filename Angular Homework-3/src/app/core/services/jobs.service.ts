import { Injectable, signal, computed } from '@angular/core';
import { Job } from '../models/jobs.model';
import { mockJobs } from './mock-jobs';

@Injectable({ providedIn: 'root' })
export class JobsService {
  private readonly _jobs = signal<Job[]>([...mockJobs]);

  jobs = this._jobs.asReadonly();

  availableJobs = computed(() => this._jobs().filter(j => !j.isApplied));
  appliedJobs = computed(() => this._jobs().filter(j => !!j.isApplied));

  totals = computed(() => ({
    available: this.availableJobs().length,
    applied: this.appliedJobs().length
  }));

  addJob(job: Job) {
    this._jobs.update(list => [...list, job]);
  }

  updateJob(updatedJob: Job) {
    this._jobs.update(list => list.map(j => j.id === updatedJob.id ? { ...j, ...updatedJob } : j));
  }

  getJobById(id: number): Job | undefined {
    return this._jobs().find(j => j.id === id);
  }

  apply(job: Job) {
    this._jobs.update(list => list.map(j => j.id === job.id ? { ...j, isApplied: true } : j));
  }

  cancel(job: Job) {
    this._jobs.update(list => list.map(j => j.id === job.id ? { ...j, isApplied: false } : j));
  }

  sortBySalaryAsc() {
    this._jobs.update(list => {
      const copy = [...list];
      copy.sort((a, b) => a.startingSalary - b.startingSalary);
      return copy;
    });
  }

  sortByWorkType() {
    this._jobs.update(list => {
      const copy = [...list];
      copy.sort((a, b) => (a.workType || '').localeCompare(b.workType || ''));
      return copy;
    });
  }
}