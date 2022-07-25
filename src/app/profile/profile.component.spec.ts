import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { UserProfile } from '../shared/models/profile-model';
import { RegistrationService } from '../shared/services/registration.service';

import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let httpClientSpy: jasmine.SpyObj<RegistrationService>;
  beforeEach(async () => {
       //creating mock Registration Service using Jasmine
       httpClientSpy = jasmine.createSpyObj('RegistrationService', ['getUserProfile']);
       component = new ProfileComponent(httpClientSpy);
   
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      declarations: [ ProfileComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('getProfileUser',() => {
    // Mock Response 
    const response = JSON.parse('{"name":"King Julien","email":"kingj@email.com","bio":"Hi my name is King Julien and I like to move it move it.","img":"https://tinyurl.com/2p9953zy"}');
    let obs = new Observable((subscriber) => {
      setTimeout(()=>{
          subscriber.next(response);
          subscriber.complete();
      }, 3000);
  });

  httpClientSpy.getUserProfile.and.returnValue(obs);
  component.getUserProfile();

    component.userProfile.subscribe( (profile : UserProfile) => {
      expect(profile.name).toMatch('King Julien');
      });
  });
});
