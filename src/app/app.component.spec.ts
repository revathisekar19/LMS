import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LoginService } from './services/login.service';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let mockLoginService: jasmine.SpyObj<LoginService>;

  beforeEach(async () => {
    // Create a mock instance of LoginService
    mockLoginService = jasmine.createSpyObj('LoginService', ['isLoggedIn'], {
      isLoggedIn: of(false), // Default value for the observable
    });

    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [{ provide: LoginService, useValue: mockLoginService }],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'ilearn'`, () => {
    expect(component.title).toEqual('ilearn');
  });

  it('should set isLoggedIn to false when login status changes to false', () => {
    // Update the mock observable to emit false
    mockLoginService.isLoggedIn = of(false);

    // Re-initialize the component to ensure the latest observable value is used
    component.ngOnInit();

    // Check the updated value
    expect(component.isLoggedIn).toBeFalse();
  });
});
