import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [  
        ReactiveFormsModule, 
        HttpClientTestingModule, 
        RouterTestingModule  
      ],
      declarations: [ RegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.getUserRegistration()
    expect(component).toBeTruthy();
  });

  it('TEST Registration Form',() => {
    const formElement = fixture.debugElement.nativeElement.querySelector('#registerForm');
    const inputElements = formElement.querySelectorAll('mat-form-field');
    console.log("LENGTH :::::: "+inputElements.length);

    expect(inputElements.length).toEqual(4);
  });


});
