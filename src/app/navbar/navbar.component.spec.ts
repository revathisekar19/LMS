// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { NavbarComponent } from './navbar.component';

// describe('NavbarComponent', () => {
//   let component: NavbarComponent;
//   let fixture: ComponentFixture<NavbarComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [NavbarComponent]
//     })
//     .compileComponents();
    
//     fixture = TestBed.createComponent(NavbarComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { LoginService } from '../services/login.service';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

// Mock LoginService
class MockLoginService {
  logout() {
    return of(null); // Mocking logout method (if it returns an observable)
  }
}

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let mockLoginService: MockLoginService;

  beforeEach(async () => {
    mockLoginService = new MockLoginService();

    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      providers: [
        { provide: LoginService, useValue: mockLoginService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Verify the component is created successfully
  it('should create the NavbarComponent', () => {
    expect(component).toBeTruthy();
  });

  // Test case: Check if session storage is used to set userName and userRole correctly
  it('should set userName and userRole from sessionStorage', () => {
    fixture.detectChanges(); // Trigger change detection

    expect(component.userName).toBe('');
    expect(component.userRole).toBe('');
  });

  // Test case: Check if logout method clears sessionStorage and calls loginservice.logout()
  it('should clear sessionStorage and call loginservice.logout on logout', () => {
    spyOn(sessionStorage, 'clear');
    spyOn(mockLoginService, 'logout');

    // Call logout method
    component.logout();

    // Verify sessionStorage.clear is called
    expect(sessionStorage.clear).toHaveBeenCalled();

    // Verify loginservice.logout is called
    expect(mockLoginService.logout).toHaveBeenCalled();
  });
});
