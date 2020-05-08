import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpResponseBase} from '@angular/common/http'
import { Port } from './Models/Port'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  port:Port = new Port();
  private _registerUrl = "https://localhost:"+this.port.port+"/api/v1/identity/register"
  private _loginUrl = "https://localhost:"+this.port.port+"/api/v1/identity/login"
  constructor(private http: HttpClient) { }

  registerUser(user){
    return this.http.post<any>(this._registerUrl, user)
  }
  
  loginUser(user){
    return this.http.post<any>(this._loginUrl, user)
  }

  logedIn(){
    if (localStorage.getItem("token") !== null)
      return true;
    return false;
  }

  isPoster(){
    if (localStorage.getItem("role") !== null) {
      return localStorage.getItem('role') === "Poster";
    }
    return false;
  }

  isAdmin(){
    if (localStorage.getItem("role") !== null) {
      return localStorage.getItem('role') === "Admin";
    }
    return false;
  }

}
