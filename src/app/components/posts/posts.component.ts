import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/Post';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts!: Post[];
  postOriginalLocation: any;
  showAddPostBtn: boolean = false;
  currentPost: Post = {
    id: 0,
    title: '',
    body: '',
  };
  isEdit: boolean = false;
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPost().subscribe((post) => {
      this.posts = post;
    });
  }

  onNewPost(post: Post) {
    this.posts.unshift(post);
  }

  editPost(post: Post) {
    this.currentPost = post;
    this.isEdit = true;
    this.posts.forEach((cur, index) => {
      if (post.id === cur.id) {
        this.postOriginalLocation = post.id;
        this.posts.splice(index, 1);
        this.posts.unshift(post);
      }
    });
  }

  onUpdatedPost(post: Post) {
    if (post.id === this.postOriginalLocation) {
      this.posts.splice(
        this.postOriginalLocation,
        this.postOriginalLocation - 1,
        post
      );
    }
    this.isEdit = false;
    this.posts.shift();
    this.currentPost = {
      id: 0,
      title: '',
      body: '',
    };
  }
  removePost(post: Post) {
    this.postService.removePost(post.id).subscribe(() => {
      this.posts.forEach((cur, index) => {
        if (post.id === cur.id) {
          this.posts.splice(index, 1);
        }
      });
    });
  }
  showAddPost() {
    this.showAddPostBtn = !this.showAddPostBtn;
  }
}
