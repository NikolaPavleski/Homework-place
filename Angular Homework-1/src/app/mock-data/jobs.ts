import { Job } from '../models/job.model';

export const JOBS: Job[] = [
  {
    company: 'Google',
    expires: '2025-12-31',
    position: 'Frontend Developer',
    startingSalary: 85000,
    workType: 'remote',
    location: 'Mountain View',
    country: 'USA',
    qualifications: 'BS in Computer Science',
    description: 'Work on cutting-edge web technologies.',
    isApplied: false,
  },
  {
    company: 'Amazon',
    expires: '2025-11-15',
    position: 'Backend Engineer',
    startingSalary: 95000,
    workType: 'onsite',
    location: 'Seattle',
    country: 'USA',
    qualifications: 'Experience with Node.js and AWS',
    description: 'Develop scalable backend services.',
    isApplied: false,
  }
];