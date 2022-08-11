import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Blog } from './blog.model';
import { Post } from './post/post.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  public blog?: Blog;
  public postsByDate!: any;
  constructor(private service: BlogService) {}

  ngOnInit(): void {
    this.service.getBlog().subscribe((data) => {
      this.blog = data;
      this.postsByDate = this.blog.posts.reduce((group: any, post: Post) => {
        const date = new Date(post.date).toLocaleDateString();
        group[date] = group[date] ?? [];
        group[date].push(post);
        return group;
      }, {});
    });
  }
}
