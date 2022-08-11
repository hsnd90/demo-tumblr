import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { DateComponent } from '../shared/date/date.component';
import { BlogComponent } from './blog.component';
import { PostComponent } from './post/post.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BlogComponent, PostComponent, DateComponent],
  providers: [BlogService],
  exports: [BlogComponent],
})
export class BlogModule {}
