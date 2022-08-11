import { Post } from './post/post.model';

export interface Blog {
  tumblelog: { title: string; description: string };
  description: string;
  'posts-total': number;
  posts: Post[];
}
