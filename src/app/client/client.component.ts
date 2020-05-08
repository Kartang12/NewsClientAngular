import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor() { }

  loggedIn:boolean;
  ngOnInit(): void {
    this.loggedIn = !!localStorage.getItem("token")
  }

  logOut(){
    localStorage.removeItem("token")
    localStorage.removeItem("name")
    localStorage.removeItem("role")
  }
}
