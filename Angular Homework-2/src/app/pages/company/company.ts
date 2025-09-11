import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { JobsService } from '../../core/services/jobs.service';
import { Job } from '../../core/models/jobs.model';

@Component({
  selector: 'app-company',
  templateUrl: './company.html',
  styleUrls: ['./company.scss'],
  imports: [CommonModule]
})
export class CompanyComponent {
  private route = inject(ActivatedRoute);
  private jobsService = inject(JobsService);

  companyJob: Job | undefined;

  constructor() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.companyJob = this.jobsService.jobs().find(j => j.id.toString() === id);
    }
  }
}