import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { EventService} from '../../event.service';
import { Post } from 'src/app/Models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  private routeSubscription: Subscription;
  constructor(private _eventService: EventService, private _router: Router, private route: ActivatedRoute) { 
    this.routeSubscription = route.params.subscribe(params => this.postId = params['id']);
  }

  postId:string;
  post:Post;
  ngOnInit(): void {
    this._eventService.getPostById(this.postId).subscribe(
      res=> this.post = res,
      err=> console.log(err) 
    )
  }


  back(){
    this._router.navigate(["/Posts/posts/"])
  }
}
