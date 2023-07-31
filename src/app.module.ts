import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPostComponent } from './app-blog-post.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BlogPostComponent],
  exports: [BlogPostComponent],
})
export class ApplicationModule {}
