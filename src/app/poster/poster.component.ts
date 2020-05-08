import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})
export class PosterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  logOut(){
    localStorage.removeItem("token")
    localStorage.removeItem("name")
    localStorage.removeItem("role")
  }
}
