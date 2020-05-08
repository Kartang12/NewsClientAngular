import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/app/Models/UserData';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService} from '../../user.service';
import { RolesService } from 'src/app/roles.service';
import { Role } from 'src/app/Models/Role';
import {HttpErrorResponse} from '@angular/common/http'

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  users: UserData[];
  roles: Role[];
  errorsPresent: boolean;
  error: HttpErrorResponse;

  constructor(private _userService: UserService, private route: ActivatedRoute, private _rolesService:RolesService, private _router:Router)
  { }

  ngOnInit() {
    this._userService.getAllUsers().subscribe(
      res => {
        this.users = res
      },
      err => console.log(err)
    );

    this._rolesService.getAllRoles().subscribe(
      res => {
        this.roles = res
      },
      err => console.log(err)
    );
  }

  viewUser(user:UserData){
    // console.log(123)
    this._router.navigate(["../EditUser/"+user.Name])
  }

  deleteUser(username:string){
    this._userService.deleteUser(username).subscribe(
      res => {
        this.ngOnInit()
      },
      err => {
        this.errorsPresent = true
        this.error = err
        console.log(err)
      }
    )
  }
}
