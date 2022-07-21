import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserProfile } from '../shared/models/profile-model';
import { RegistrationService } from '../shared/services/registration.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userProfile:Observable<UserProfile>;

  constructor(private registrationservice:RegistrationService) { }

  ngOnInit(): void {
    this.getUserProfile();
  }

getUserProfile(){
    this.userProfile=this.registrationservice.getUserProfile()
}

}
