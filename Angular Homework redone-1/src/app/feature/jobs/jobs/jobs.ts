import { Component } from '@angular/core';
import { AppliedJobsListComponent } from "../components/applied-jobs-list/applied-jobs-list";
import { JobListComponent } from "../components/job-list/job-list";
import { JobSortPanelComponent } from "../components/job-sort-panel/job-sort-panel";
import { JobInfoPanelComponent } from "../components/job-info-panel/job-info-panel";

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.html',
  styleUrls: ['./jobs.scss'],
  imports: [AppliedJobsListComponent, JobListComponent, JobSortPanelComponent, JobInfoPanelComponent]
})
export class JobsComponent {}