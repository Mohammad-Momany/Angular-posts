import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostService } from './services/post.service';
import { PostsComponent } from './components/posts/posts.component';
import { PostFormComponent } from './components/post-form/post-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostsComponent,
    PostFormComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [PostService],
  bootstrap: [AppComponent],
})
export class AppModule {}
