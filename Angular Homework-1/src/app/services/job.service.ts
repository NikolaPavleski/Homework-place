import { Injectable, signal } from '@angular/core';
import { Job } from '../models/job.model';
import { JOBS } from '../mock-data/jobs';

@Injectable({ providedIn: 'root' })
export class JobService {
  private jobs = signal<Job[]>([...JOBS]);

  get availableJobs() {
    return this.jobs().filter(job => !job.isApplied);
  }

  get appliedJobs() {
    return this.jobs().filter(job => job.isApplied);
  }

  applyToJob(job: Job) {
    this.jobs.update(jobs => 
      jobs.map(j => j === job ? { ...j, isApplied: true } : j)
    );
  }

  cancelApplication(job: Job) {
    this.jobs.update(jobs => 
      jobs.map(j => j === job ? { ...j, isApplied: false } : j)
    );
  }

  sortJobs(by: 'salary' | 'workType') {
    this.jobs.update(jobs => {
      const sorted = [...jobs];
      if (by === 'salary') {
        sorted.sort((a, b) => b.startingSalary - a.startingSalary);
      } else {
        sorted.sort((a, b) => a.workType.localeCompare(b.workType));
      }
      return sorted;
    });
  }

  getJobsSignal = () => this.jobs;
}