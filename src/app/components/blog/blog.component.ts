import { Component, OnInit, ViewChild } from '@angular/core';
import { PostsService} from '../../services/posts.service';
import { Post} from '../../models/Post'
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  @ViewChild('form') form1: NgForm;
  posts: Post[];
  comments: Comment[];
  isAdmin = true;  
  editPostId : number;

  constructor(
    private postService : PostsService,
  ) { }

  ngOnInit() {
    this.postService.getPosts().subscribe((posts : Post[]) => {
      this.posts = posts;
      console.log (posts);     
    }, error => {
    });
    this.postService.editTaskEvent.subscribe((post: Post)=>{
      if (post.id){
        this.editPostId = post.id;
      }
    })
  }
  // /.ngOnInit
  onDelete(id : number){   

    this.postService.deletePost(id).subscribe(data => {       
      this.posts = this.posts.filter(post => post.id != id);
      ;
    }, error => {
    });         
  }
  // /.onDelete
  onAddPost(post : Post){
    this.posts.unshift(post);
  }
  // /.onAddPost
  onEdit (post : Post){   
    this.postService.emitEditEvent(post);
  }
  // /.onEdit   

}
