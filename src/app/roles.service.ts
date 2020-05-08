import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Role } from './Models/Role';
import { Port } from './Models/Port'

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  port:Port = new Port();
  private _getAllRolesUrl = "https://localhost:"+this.port.port+"/api/v1/roles"

  constructor(private http: HttpClient) {  }

  getAllRoles(){
    return this.http.get<any>(this._getAllRolesUrl)
  }

}
