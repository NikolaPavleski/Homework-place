import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.html',
  styleUrls: ['./profile.scss'],
  imports: [CommonModule]
})
export class ProfileComponent {
  user = {
    name: 'Johnny Winter',
    title: 'Fullstack Developer',
    location: 'New York, USA',
    experience: [
      { company: 'Tech Corp', role: 'Angular Developer', years: '2021 - Present' },
      { company: 'Web Solutions', role: 'Frontend Engineer', years: '2018 - 2021' }
    ],
    status: 'Open to work'
  };
}