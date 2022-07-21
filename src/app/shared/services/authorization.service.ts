import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

 isauthenticated:boolean = false;

  constructor() { }

  
  getAuthenticated():boolean{
    return this.isauthenticated;
  }
  setAuthenticated(status:boolean){
    this.isauthenticated = status;
  }
  
}
