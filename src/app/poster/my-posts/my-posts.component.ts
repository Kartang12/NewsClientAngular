import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/event.service';
import { Post } from 'src/app/Models/Post';
import { TagsService } from 'src/app/tags.service';
import { Tag } from 'src/app/Models/Tag';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit {

  constructor(private _postsService:EventService, private _tagsService:TagsService, private _router:Router) { }

  selectedTag:string;
  tags:Tag[];
  posts:Post[];

  ngOnInit() {
    this._postsService.getMyPosts().subscribe(
      res => {
        this.posts = res
        console.log(res)
      },
      err => console.log(err)
    )

    this._tagsService.getAllTags().subscribe(
      res => {
        this.tags = res
        console.log(res)
      },
      err => console.log(err)
    )
  }

  editPost(id:string){
    this._router.navigate(["/Poster/EditPost/"+id])
  }
}
