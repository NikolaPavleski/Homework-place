import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JobsService } from '../../core/services/jobs.service';
import { Job } from '../../core/models/jobs.model';

@Component({
  selector: 'app-edit-job',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-job.html',
  styleUrls: ['./edit-job.scss']
})
export class EditJobComponent {
  jobForm: FormGroup;
  jobId!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private jobsService: JobsService
  ) {
    this.jobForm = this.fb.group({
      position: ['', Validators.required],
      company: ['', Validators.required],
      location: ['', Validators.required],
      country: ['', Validators.required],
      qualifications: ['', Validators.required],
      description: ['', Validators.required],
      startingSalary: [0, [Validators.required, Validators.min(1)]],
      workType: ['', Validators.required],
      expires: ['', Validators.required]
    });

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.jobId = +id;
        const job = this.jobsService.getJobById(this.jobId);
        if (job) {
          this.jobForm.patchValue(job);
        }
      }
    });
  }

  onSubmit() {
    if (this.jobForm.valid) {
      const updatedJob: Job = {
        id: this.jobId,
        isApplied: false,
        ...this.jobForm.value
      };
      this.jobsService.updateJob(updatedJob);
      this.router.navigate(['/jobs']);
    }
  }
}