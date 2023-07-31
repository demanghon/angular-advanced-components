import { Component, Input } from '@angular/core';

// Blog Post Component
@Component({
  selector: 'app-blog-post',
  template: `
      <div class="blog-post">
        <h2>{{ title }}</h2>
        <p class="author">Author: {{ author }}</p>
        <p class="date">Date: {{ date }}</p>
        <ng-content select=".blog-post-content"></ng-content>
        <ng-content select=".blog-post-sidebar"></ng-content>
        <ng-content></ng-content>
      </div>
    `,
})
export class BlogPostComponent {
  @Input() title = '';
  @Input() author = '';
  @Input() date = '';
}
