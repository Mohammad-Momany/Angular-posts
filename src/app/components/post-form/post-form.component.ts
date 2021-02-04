import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/Post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  @Input() currentPost!: Post;
  @Input() isEdit!: boolean;
  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  @Output() updatedPost: EventEmitter<Post> = new EventEmitter();
  disabledBtn:boolean = true
  constructor(private postService: PostService) {}

  ngOnInit(): void {}
  addPost(title: string, body: string) {
    if (!title || !body) {
      return;
    } else {
      this.disabledBtn = false
      this.postService.savePost({ title, body } as Post).subscribe((post) => {
        this.newPost.emit(post);
      });
    }
  }
  UpdatePost() {
    this.postService.UpdatePost(this.currentPost).subscribe((post) => {
      this.updatedPost.emit(post);
    });
  }
}
