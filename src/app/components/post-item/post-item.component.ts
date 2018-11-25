import {Component, OnInit, Input, Output, EventEmitter, OnChanges} from '@angular/core';
// / angular core
import {Post} from "../../models/post";
// /models 
import {PostsService} from "../../services/posts.service";
// /services


@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  @Input('post') post: Post;
  @Output() deletePost: EventEmitter<number> = new EventEmitter();
  @Output() editPost: EventEmitter<Post> = new EventEmitter();
  @Output() showComments: EventEmitter<number> = new EventEmitter();
  @Output() comments: Comment[];
  editPostId : number;
  

  constructor(
    public postService: PostsService,
  ) { }

  ngOnInit() {
    this.postService.editTaskEvent.subscribe((post: Post)=>{
      if (post.id === this.post.id){
        this.editPostId = this.post.id;
      }
      else{
        this.editPostId = 0;
      }

    })
  }


  onDelete(id: number) {
    this.deletePost.emit(id);
  }


  onEdit (post : Post){
    const updtPost = {
      title : post.title,
      body : post.body,
      userId: post.userId,
      id: post.id
    }
    this.editPost.emit(updtPost);
  }

  onCancel() {
    this.editPost.emit({title: '', body: '', userId: 1});
  }

  onSubmit(){
    
  }

}