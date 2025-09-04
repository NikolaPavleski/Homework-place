import { Pipe, PipeTransform } from '@angular/core';
import { Job } from '../../core/models/jobs.model';

@Pipe({
  name: 'jobFilter',
  standalone: true
})
export class JobFilterPipe implements PipeTransform {
  transform(jobs: Job[] | null | undefined, search: string): Job[] | null | undefined {
    if (!jobs) return jobs;
    if (!search || !search.trim()) return jobs;
    const q = search.toLowerCase().trim();
    return jobs.filter(j =>
      (j.position && j.position.toLowerCase().includes(q)) ||
      (j.company && j.company.toLowerCase().includes(q)) ||
      (j.location && j.location.toLowerCase().includes(q))
    );
  }
}