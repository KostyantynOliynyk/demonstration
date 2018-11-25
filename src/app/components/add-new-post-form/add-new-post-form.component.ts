import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { EventEmitter } from 'events';
import { NgForm} from "@angular/forms";
import { Post } from 'src/app/models/post';
import {PostsService} from '../../services/posts.service';


@Component({
  selector: 'app-add-new-post-form',
  templateUrl: './add-new-post-form.component.html',
  styleUrls: ['./add-new-post-form.component.css']
})
export class AddNewPostFormComponent implements OnInit {
  @Output() onAddNewPost : EventEmitter<Post> = new EventEmitter;
  formData = {
    title : '',
    body : '',
    userId : 1 
  }

  constructor(
    public postService: PostsService,
  ) { }

  ngOnInit() {
    this.postService.editTaskEvent.subscribe((post: Post)=>{
      console.log ('edit event', post)
      this.formData = post;
    })
  }
  // OnInit

  onAddPost(){

    const newPost : Post = {
        title : this.formData.title,
        body : this.formData.body,
        userId : this.formData.userId
    };
    
    this.postService.addPost(newPost).subscribe((data : Post) => {
        if(data.id){
          this.onAddNewPost.emit(data);
        }
    });

  }
  // onAddPost

  onCancel() {
    this.postService.emitEditEvent({title: '', body: '', userId: 1});
  }
}

