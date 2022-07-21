import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistrationService } from '../shared/services/registration.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userProfile:Observable<any>;

  constructor(private registrationservice:RegistrationService) { }

  ngOnInit(): void {
    this.getUserProfile();
  }

getUserProfile(){
/*   this.registrationservice.getUserProfile().subscribe(res=>{
    console.log(res); */
    this.userProfile=this.registrationservice.getUserProfile()
}

}
