import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  submitUserRegistration(): Observable<any> {
  return this.http.get(environment.registrationUrl)
  }

  getUserProfile(): Observable<any> {
    return this.http.get(environment.profileUrl)
    }

}
