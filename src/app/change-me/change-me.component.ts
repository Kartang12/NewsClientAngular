import { Component, OnInit } from '@angular/core';
import { UserChangePassword } from '../Models/UserChangePassword';
import { UserService } from '../user.service';

@Component({
  selector: 'app-change-me',
  templateUrl: './change-me.component.html',
  styleUrls: ['./change-me.component.css']
})
export class ChangeMeComponent implements OnInit {

  constructor(private _userService:UserService) { }
  oldName:string;
  data:UserChangePassword = new UserChangePassword();

  ngOnInit(): void {
    this.oldName = localStorage.getItem('name')
  }

  changeMe(){
    this._userService.changeMe(this.oldName, this.data).subscribe(
      res=> {
        localStorage.setItem('email', this.data.Name)
      },
      err=> console.log(err)
    )
  }
}
