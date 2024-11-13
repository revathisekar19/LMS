import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EnrollComponent } from './enroll.component';

describe('EnrollComponent', () => {
  let component: EnrollComponent;
  let fixture: ComponentFixture<EnrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnrollComponent],
      imports : [FormsModule,ReactiveFormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
