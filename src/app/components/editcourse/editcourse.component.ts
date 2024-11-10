import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-editcourse',
  templateUrl: './editcourse.component.html',
  styleUrl: './editcourse.component.css'
})
export class EditcourseComponent {
  editCourseForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditcourseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, // course data passed to the dialog
    private fb: FormBuilder
  ) {
    // Initialize the form with the course data
    this.editCourseForm = this.fb.group({
      name: [data.name, [Validators.required]],
      description: [data.description, [Validators.required]],
      timings: [data.timings, [Validators.required]],
      venue: [data.venue, [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.editCourseForm.valid) {
      this.dialogRef.close(this.editCourseForm.value); // Return the updated course data
    }
  }

  onCancel(): void {
    this.dialogRef.close(); // Close the dialog without saving
  }
}
