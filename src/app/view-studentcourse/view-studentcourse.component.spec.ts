import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStudentcourseComponent } from './view-studentcourse.component';

describe('ViewStudentcourseComponent', () => {
  let component: ViewStudentcourseComponent;
  let fixture: ComponentFixture<ViewStudentcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewStudentcourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewStudentcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
