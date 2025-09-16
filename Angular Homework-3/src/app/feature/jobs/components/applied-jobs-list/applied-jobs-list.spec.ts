import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedJobsList } from './applied-jobs-list';

describe('AppliedJobsList', () => {
  let component: AppliedJobsList;
  let fixture: ComponentFixture<AppliedJobsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppliedJobsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppliedJobsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
