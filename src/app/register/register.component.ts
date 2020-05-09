import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

import {HttpResponseBase, HttpErrorResponse} from '@angular/common/http'
import { NewUser } from '../Models/NewUser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _auth: AuthService, private router:Router) { }

  ngOnInit() {
  }

  errorsPresent:boolean = false;
  errors: HttpErrorResponse;
  newUser: NewUser = new NewUser();

  registerUser() {
    this.newUser.role = "User"
    this._auth.registerUser(this.newUser)
    .subscribe(
      res =>{ 
        localStorage.setItem('token', res.token)
        localStorage.setItem('name', res.email)
        localStorage.setItem('role', 'User')
        this.router.navigate(['/Posts/posts'])
      },
      err => {
        this.errors = <HttpErrorResponse>err.error.errors
        this.errorsPresent = true
      }
    )
  }

}

