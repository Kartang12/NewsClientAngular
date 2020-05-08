import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/event.service';
import { Post } from 'src/app/Models/Post';
import { TagsService } from 'src/app/tags.service';
import { Tag } from 'src/app/Models/Tag';
import { NewPost } from 'src/app/Models/NewPost';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UpdatePost } from 'src/app/Models/UpdatePost';
import { PostTag } from '../../Models/PostTag'

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  private routeSubscription: Subscription;
  constructor(private _postsService:EventService, private route: ActivatedRoute,private _tagsService:TagsService) { 
    this.routeSubscription = route.params.subscribe(params => this.postId = params['id']);
  }

  postId:string;
  selectedTag:string;
  tags:Tag[];
  post:Post = new Post();
  newPost:NewPost = new NewPost();
  updatePost:UpdatePost = new UpdatePost();
  action:string = "Создать"

  ngOnInit() {
    if (this.postId != undefined)
    {
      this.action = "Обновить";
      this._postsService.getPostById(this.postId).subscribe(
        res =>
        {
          this.post = res
          this.newPost.name = this.post.name
          this.newPost.content = this.post.content
          // this.newPost.tags.push(<) 
        },
        error => console.log(error)
      );
    }

    this._tagsService.getAllTags().subscribe(
      res => {
        this.tags = res
        console.log(res)
      },
      err => console.log(err)
    )
  }

  createPost(){
    if (this.postId != undefined)
    {
        this.updatePost.name = this.newPost.name
        this.updatePost.content = this.newPost.content
        this.newPost.tags.push(this.selectedTag)
        this.updatePost.tag = this.newPost.tags[0]

        console.log(this.updatePost)
        console.log(this.newPost.tags[0])

        this._postsService.updatePost(this.postId, this.updatePost).subscribe(
          res =>
          {
            console.log(res)
            // this.post = res;
          },
          error => console.log(error)
        );
    }
    else{
      this.newPost.userName = localStorage.getItem('name')
      this.newPost.tags.push(this.selectedTag)
      this._postsService.createPost(this.newPost).subscribe(
        res => {
          this.tags = res
          console.log(res)
        },
        err => console.log(err)
      )
    }
  }
}
