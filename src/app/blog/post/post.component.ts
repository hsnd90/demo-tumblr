import { Component, Input, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BlogService } from 'src/app/services/blog.service';
import { Post } from './post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PostComponent {
  @Input() posts!: any;
  @Input() date!: any;
  contentLink: string = '';
  showOpenIcon = false;
  externalHTML: any;
  constructor(private service: BlogService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {}

  showModal(link: string) {
    this.contentLink = link;
  }

  getSite(link: string) {
    this.externalHTML = this.sanitizer.bypassSecurityTrustHtml(link);
  }
}
