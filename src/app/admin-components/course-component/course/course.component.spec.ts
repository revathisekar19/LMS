// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { MatCardModule } from '@angular/material/card';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { CourseComponent } from './course.component';

// describe('CourseComponent', () => {
//   let component: CourseComponent;
//   let fixture: ComponentFixture<CourseComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [CourseComponent],
//       imports:[MatCardModule,MatFormFieldModule]
//     })
//     .compileComponents();
    
//     fixture = TestBed.createComponent(CourseComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseComponent } from './course.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseComponent],
      imports: [
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        BrowserAnimationsModule
      ],
      providers: [FormBuilder]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the form with required fields', () => {
    expect(component.courseForm.contains('courseId')).toBeTrue();
    expect(component.courseForm.contains('courseName')).toBeTrue();
    expect(component.courseForm.contains('instructorName')).toBeTrue();
    expect(component.courseForm.contains('courseVenue')).toBeTrue();
    expect(component.courseForm.contains('courseTiming')).toBeTrue();
    expect(component.courseForm.contains('courseMode')).toBeTrue();
    expect(component.courseForm.contains('courseDays')).toBeTrue();
  });

  it('should mark the form as invalid if required fields are empty', () => {
    component.courseForm.controls['courseId'].setValue('');
    component.courseForm.controls['courseName'].setValue('');
    component.courseForm.controls['instructorName'].setValue('');
    component.courseForm.controls['courseVenue'].setValue('');
    component.courseForm.controls['courseTiming'].setValue('');
    component.courseForm.controls['courseMode'].setValue('');
    component.courseForm.controls['courseDays'].setValue('');

    expect(component.courseForm.invalid).toBeTrue();
  });

  it('should mark the form as valid if all required fields are filled', () => {
    component.courseForm.controls['courseId'].setValue('CSE101');
    component.courseForm.controls['courseName'].setValue('Computer Science 101');
    component.courseForm.controls['instructorName'].setValue('John Doe');
    component.courseForm.controls['courseVenue'].setValue('Room 101');
    component.courseForm.controls['courseTiming'].setValue('10:00 AM');
    component.courseForm.controls['courseMode'].setValue('Online');
    component.courseForm.controls['courseDays'].setValue('Monday, Wednesday, Friday');

    expect(component.courseForm.valid).toBeTrue();
  });

  it('should call onCancel and reset form', () => {
    spyOn(console, 'log');
    component.onCancel();
    expect(console.log).toHaveBeenCalledWith('Creation Canceled');
    expect(component.courseForm.value).toEqual({
      courseId: null,
      courseName: null,
      instructorName: null,
      courseVenue: null,
      courseTiming: null,
      courseMode: null,
      courseDays: null
    });
  });

  it('should call onReset and reset form', () => {
    component.courseForm.controls['courseId'].setValue('CSE101');
    component.courseForm.controls['courseName'].setValue('Computer Science 101');
    component.onReset();
    expect(component.courseForm.value).toEqual({
      courseId: null,
      courseName: null,
      instructorName: null,
      courseVenue: null,
      courseTiming: null,
      courseMode: null,
      courseDays: null
    });
  });
});
