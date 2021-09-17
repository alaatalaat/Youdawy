import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private _HttpClient : HttpClient) { }

  signUpUrl:string = 'https://routeegypt.herokuapp.com/signup';
  makeRegister(userData: any):Observable<any>{
    return this._HttpClient.post(this.signUpUrl,userData)
  }


  loginUrl:string = 'https://routeegypt.herokuapp.com/signup' ;
  makeLogin(loginData:any):Observable<any>{
    return this._HttpClient.post(this.loginUrl , loginData);
  }



}
