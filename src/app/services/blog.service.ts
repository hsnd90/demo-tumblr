import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from 'src/app/blog/blog.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class BlogService {
  constructor(private http: HttpClient) {}
  getBlog(): Observable<Blog> {
    return this.http.get<Blog>(environment.jsonUrl);
  }

  getSite(link: string): Observable<any> {
    return this.http.get(link, { responseType: 'text' });
  }
}
