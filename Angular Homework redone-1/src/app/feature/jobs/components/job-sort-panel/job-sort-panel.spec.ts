import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSortPanel } from './job-sort-panel';

describe('JobSortPanel', () => {
  let component: JobSortPanel;
  let fixture: ComponentFixture<JobSortPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobSortPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobSortPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
