import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  logOut(){
    localStorage.removeItem("token")
    localStorage.removeItem("name")
    localStorage.removeItem("role")
  }
}
