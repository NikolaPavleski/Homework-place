import { Job } from '../models/jobs.model';

export const mockJobs: Job[] = [
  {
    id: 1,
    company: 'TechCorp',
    expires: '2025-09-01',
    position: 'Frontend Developer',
    startingSalary: 60000,
    workType: 'remote',
    location: 'Berlin',
    country: 'Germany',
    qualifications: 'Angular, TypeScript, CSS',
    description: 'Work on modern Angular apps with a global team.',
    isApplied: false
  },
  {
    id: 2,
    company: 'HealthPlus',
    expires: '2025-10-01',
    position: 'Backend Engineer',
    startingSalary: 70000,
    workType: 'onsite',
    location: 'New York',
    country: 'USA',
    qualifications: 'Node.js, PostgreSQL, Docker',
    description: 'Build scalable APIs for healthcare solutions.',
    isApplied: false
  },
  {
    id: 3,
    company: 'EduSoft',
    expires: '2025-08-30',
    position: 'Fullstack Engineer',
    startingSalary: 65000,
    workType: 'hybrid',
    location: 'London',
    country: 'UK',
    qualifications: 'Angular, Node.js, MongoDB',
    description: 'Contribute to building an e-learning platform.',
    isApplied: false
  }
];