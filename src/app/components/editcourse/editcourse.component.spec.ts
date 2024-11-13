import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';

import { EditcourseComponent } from './editcourse.component';

describe('EditcourseComponent', () => {
  let component: EditcourseComponent;
  let fixture: ComponentFixture<EditcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditcourseComponent],
      imports:[MatDialogRef]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
