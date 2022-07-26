import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserProfile } from '../shared/models/profile-model';
import { AuthorizationService } from '../shared/services/authorization.service';
import { RegistrationService } from '../shared/services/registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  userdetails: UserProfile;

  constructor(private formBuilder: FormBuilder,
    private registrationservice: RegistrationService, private authorizationservice: AuthorizationService,
    private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      biodata: ['', [Validators.required, Validators.maxLength(256)]]
    })
  }


  get f(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }


  onSubmit(): void {
    console.log("Form Submitted");
    console.log(this.registerForm.value);

    if (this.registerForm.invalid) {
      return;
    }
    this.userdetails = this.registerForm.value,
    this.getUserRegistration();
    this.submitted = true;
  }


  getUserRegistration() {
    this.registrationservice.submitUserRegistration().subscribe(res => {
      this.authorizationservice.setAuthenticated(res.success);
      this.router.navigateByUrl("/profile");
    })
  }



}
