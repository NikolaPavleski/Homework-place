import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobInfoPanel } from './job-info-panel';

describe('JobInfoPanel', () => {
  let component: JobInfoPanel;
  let fixture: ComponentFixture<JobInfoPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobInfoPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobInfoPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
