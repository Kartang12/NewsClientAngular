import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/app/Models/UserData';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService} from '../../user.service';
import { RolesService } from 'src/app/roles.service';
import { Role } from 'src/app/Models/Role';
import {HttpErrorResponse} from '@angular/common/http'

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})

export class EditUserComponent implements OnInit {
  name: string;
  user: UserData = new UserData();
  newRole: string;
  roles: Role[];
  response:boolean = false;
  errors: HttpErrorResponse;
  errorsPresent: boolean;
  private routeSubscription: Subscription;

  constructor(private _userService: UserService, private route: ActivatedRoute, private _rolesService:RolesService)
  {
    this.routeSubscription = route.params.subscribe(params => this.name = params['name']);
  }

  ngOnInit() {
    if (this.name != undefined)
    {
      this._userService.getUser(this.name).subscribe(
        userData =>
        {
          this.user.Name = userData.name;
          this.user.Role = userData.role;
          console.log(userData)
        },
        error => console.log(error)
      );
    }

    this._rolesService.getAllRoles().subscribe(
      res => {
        this.roles = res
        console.log(this.roles)
      },
      err => console.log(err)
    );
  }

  updateUser(){
    this.user.Role = this.newRole
    this._userService.updateUser(this.name, this.user).subscribe(
      res =>{
        this.errorsPresent = false
        this.response = true
        console.log(res)
      },
      err => {
        this.errors = <HttpErrorResponse>err.error.error
        this.errorsPresent = true
        this.response = false
      }
    )
  }

}
