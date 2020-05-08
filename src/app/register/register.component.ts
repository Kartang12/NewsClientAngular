import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


import {HttpResponseBase} from '@angular/common/http'
import { NewUser } from '../Models/NewUser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _auth: AuthService) { }

  ngOnInit() {
  }

  newUser: NewUser = new NewUser();

  registerUser() {
    this.newUser.role = "User"
    this._auth.registerUser(this.newUser)
    .subscribe(
      res =>{ 
        localStorage.setItem('token', res.token)
      },
      err => {
        <HttpResponseBase>err
      }
    )
  }

}

