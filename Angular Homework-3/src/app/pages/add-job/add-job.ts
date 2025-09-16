import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JobsService } from '../../core/services/jobs.service';
import { Job } from '../../core/models/jobs.model';

@Component({
  selector: 'app-add-job',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-job.html',
  styleUrls: ['./add-job.scss']
})
export class AddJobComponent {
  jobForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private jobsService: JobsService,
    private router: Router
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
  }

  onSubmit() {
    if (this.jobForm.valid) {
      const newJob: Job = {
        id: Date.now(),
        isApplied: false,
        ...this.jobForm.value
      };
      this.jobsService.addJob(newJob);
      this.router.navigate(['/jobs']);
    }
  }
}