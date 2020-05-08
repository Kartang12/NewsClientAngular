import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginUserData = {
    email: "",
    password: ""
  }
  constructor(private _auth: AuthService){}

  ngOnInit() {
  }

  loginUser() {
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => { 
        console.log(res)
        localStorage.setItem('token', res.token)
        localStorage.setItem('role', res.role)
        localStorage.setItem('name', this.loginUserData.email)
      },
      err => console.log(err)
    )
  }

}