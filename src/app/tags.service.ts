import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Tag } from './Models/Tag';
import { Port } from './Models/Port';

@Injectable({
  providedIn: 'root'
})
export class TagsService {
  port:Port = new Port();
  private _getAllTagsUrl = "https://localhost:"+this.port.port+"/api/v1/tags"
  constructor(private http: HttpClient) {  }

  getAllTags(){
    return this.http.get<Tag[]>(this._getAllTagsUrl)
  }
}
