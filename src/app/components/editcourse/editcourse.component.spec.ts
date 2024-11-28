// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { MatDialogRef } from '@angular/material/dialog';

// import { EditcourseComponent } from './editcourse.component';

// describe('EditcourseComponent', () => {
//   let component: EditcourseComponent;
//   let fixture: ComponentFixture<EditcourseComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [EditcourseComponent],
//       imports:[MatDialogRef]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(EditcourseComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });


import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditcourseComponent } from './editcourse.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('EditcourseComponent', () => {
  let component: EditcourseComponent;
  let fixture: ComponentFixture<EditcourseComponent>;
  let dialogRefSpy: jasmine.SpyObj<MatDialogRef<EditcourseComponent>>;

  const mockCourseData = {
    name: 'Test Course',
    description: 'Test Description',
    timings: 'Mon, Wed, Fri - 10:00 AM',
    venue: 'Room 101'
  };

  beforeEach(async () => {
    dialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);
    
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, ReactiveFormsModule],
      declarations: [EditcourseComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: mockCourseData },
        { provide: MatDialogRef, useValue: dialogRefSpy },
        FormBuilder
      ],
      schemas: [NO_ERRORS_SCHEMA] // Ignore unknown elements (like mat-dialog components) in the template
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component and initialize the form with passed data', () => {
    expect(component).toBeTruthy();
    expect(component.editCourseForm).toBeDefined();
    expect(component.editCourseForm.get('name')?.value).toBe(mockCourseData.name);
    expect(component.editCourseForm.get('description')?.value).toBe(mockCourseData.description);
    expect(component.editCourseForm.get('timings')?.value).toBe(mockCourseData.timings);
    expect(component.editCourseForm.get('venue')?.value).toBe(mockCourseData.venue);
  });

  it('should be invalid when form fields are empty', () => {
    component.editCourseForm.controls['name'].setValue('');
    component.editCourseForm.controls['description'].setValue('');
    component.editCourseForm.controls['timings'].setValue('');
    component.editCourseForm.controls['venue'].setValue('');
  
    expect(component.editCourseForm.invalid).toBeTrue();
  });

  it('should be valid when all required fields are filled', () => {
    component.editCourseForm.controls['name'].setValue('Updated Course');
    component.editCourseForm.controls['description'].setValue('Updated description');
    component.editCourseForm.controls['timings'].setValue('Mon, Wed, Fri - 10:00 AM');
    component.editCourseForm.controls['venue'].setValue('Room 102');
  
    expect(component.editCourseForm.valid).toBeTrue();
  });

  it('should call onSubmit and close the dialog with form data when valid', () => {
    component.editCourseForm.controls['name'].setValue('Updated Course');
    component.editCourseForm.controls['description'].setValue('Updated description');
    component.editCourseForm.controls['timings'].setValue('Mon, Wed, Fri - 10:00 AM');
    component.editCourseForm.controls['venue'].setValue('Room 102');
    
    component.onSubmit();

    expect(dialogRefSpy.close).toHaveBeenCalledWith({
      name: 'Updated Course',
      description: 'Updated description',
      timings: 'Mon, Wed, Fri - 10:00 AM',
      venue: 'Room 102'
    });
  });

  it('should not submit the form when invalid', () => {
    component.editCourseForm.controls['name'].setValue('');
    component.editCourseForm.controls['description'].setValue('');
    component.editCourseForm.controls['timings'].setValue('');
    component.editCourseForm.controls['venue'].setValue('');
    
    component.onSubmit();

    expect(dialogRefSpy.close).not.toHaveBeenCalled();
  });

  it('should call onCancel and close the dialog without saving', () => {
    component.onCancel();

    expect(dialogRefSpy.close).toHaveBeenCalled();
  });

  it('should disable Save button when form is invalid', () => {
    component.editCourseForm.controls['name'].setValue('');
    component.editCourseForm.controls['description'].setValue('');
    component.editCourseForm.controls['timings'].setValue('');
    component.editCourseForm.controls['venue'].setValue('');

    fixture.detectChanges();
    const saveButton: HTMLButtonElement = fixture.nativeElement.querySelector('button[type="submit"]');
    expect(saveButton.disabled).toBeTrue();
  });

  it('should enable Save button when form is valid', () => {
    component.editCourseForm.controls['name'].setValue('Valid Course');
    component.editCourseForm.controls['description'].setValue('Valid Description');
    component.editCourseForm.controls['timings'].setValue('Mon - 10 AM');
    component.editCourseForm.controls['venue'].setValue('Room 101');

    fixture.detectChanges();
    const saveButton: HTMLButtonElement = fixture.nativeElement.querySelector('button[type="submit"]');
    expect(saveButton.disabled).toBeFalse();
  });

  it('should show no error when form fields are valid', () => {
    component.editCourseForm.controls['name'].setValue('Valid Course');
    fixture.detectChanges();
    
    const errorMessage = fixture.debugElement.query(By.css('mat-error'));
    expect(errorMessage).toBeFalsy();
  });

  it('should close dialog with no data when Cancel button is clicked', () => {
    const cancelButton = fixture.debugElement.query(By.css('button[mat-button]')).nativeElement;
    cancelButton.click();

    expect(dialogRefSpy.close).toHaveBeenCalledWith();
  });
});
