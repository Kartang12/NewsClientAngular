import { Component, OnInit } from '@angular/core';
import { EventService} from '../../event.service';
import { Post } from '../../Models/Post';
import { ActivatedRoute, Router } from '@angular/router';
import { Tag } from 'src/app/Models/Tag';
import { TagsService } from 'src/app/tags.service';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  posts:Post[];
  tags:Tag[];
  tagCriteria:string;
  constructor(private _eventService: EventService, private route: ActivatedRoute, private _tagsService: TagsService, private _router: Router) { }

  ngOnInit() {
    this._eventService.getPosts()
    .subscribe(
      res => {
        this.posts = res
      },
      err => console.log(err)
    )
    
    this._tagsService.getAllTags().subscribe(
      res=>this.tags = res,
      err=>console.log(err)
    )
  }

  viewPost(id:string){
    this._router.navigate(["/Posts/posts/"+id])
  }

  viewTag(tagName:string){
    this._eventService.getPostsByTag(tagName).subscribe(
      res=>{this.posts = res
      console.log(res)},
      err=>console.log(err)
    )
  }
}