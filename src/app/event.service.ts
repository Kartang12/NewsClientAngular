import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { NewPost } from './Models/NewPost';
import { Post } from './Models/Post';
import { UpdatePost } from './Models/UpdatePost';
import { Port } from './Models/Port'

@Injectable({
  providedIn: 'root'
})
export class EventService {
  port:Port = new Port();
  private _getAllPostsUrl = "https://localhost:"+this.port.port+"/api/v1/posts"
  private _getPostUrl = "https://localhost:"+this.port.port+"/api/v1/posts/"
  private _createPostUrl= "https://localhost:"+this.port.port+"/api/v1/posts"
  private _myPostUrl= "https://localhost:"+this.port.port+"/api/v1/posters/"
  private _postByTagUrl= "https://localhost:"+this.port.port+"/api/v1/postsByTag/"
  private _postByAuthorUrl= "https://localhost:"+this.port.port+"/api/v1/posters/"

  constructor(private http: HttpClient) {  }

  getPosts(){
    return this.http.get<Post[]>(this._getAllPostsUrl)
  }

  getMyPosts(){
    return this.http.get<Post[]>(this._myPostUrl+localStorage.getItem('name'));
  }
  
  getPostById(id:string){
    return this.http.get<Post>(this._getPostUrl+id);
  }

  updatePost(id:string, updatePost:UpdatePost){
    return this.http.put<any>(this._createPostUrl+'/'+id, updatePost);
  }

  createPost(newPost:NewPost){
    return this.http.post<any>(this._createPostUrl, newPost)
  }

  getPostsByTag(tagName:string){
    return this.http.get<Post[]>(this._postByTagUrl + tagName)
  }

  getPostsByAuthor(userName:string){
    return this.http.get<Post[]>(this._postByAuthorUrl + userName)
  }

}