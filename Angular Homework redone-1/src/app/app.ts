import { Component } from '@angular/core';
import { JobsComponent } from "./feature/jobs/jobs/jobs";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  imports: [JobsComponent]
})
export class AppComponent {}