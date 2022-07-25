import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';

import { RegistrationService } from '../services/registration.service';

describe('RegistrationService', () => {

  let service : RegistrationService;
  let httpMock : HttpTestingController;
  let injector:TestBed;
  const userInfo = {name : 'pallavi' , email:'pallavi471@gmail.com' ,password:'12344',biodata:'This is pallavi reloaded!!!'}
    

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RegistrationService]
      
    });
    let httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(RegistrationService);

  });
it('should be created', () => {

  //  const service: RegistrationService = TestBed.get(RegistrationService);
       // expect(service).toBeTruthy();

   // expect(service).toBeTruthy();
   service.getUserProfile().subscribe(data => expect(data.status).toBe(200));
  }); 

});

