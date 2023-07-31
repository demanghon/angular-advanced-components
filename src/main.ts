import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ApplicationModule } from './app.module';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [ApplicationModule],
  template: `
  <h1> Content projection</h1>
  <br>
  <app-blog-post title="Angular is a Powerful Framework" author="Atakan KOREZ" date="June 21, 2023">
    <div class="blog-post-content">
      <p>Angular is a powerful framework for building modern web applications.</p>
      <p>...</p>
    </div>
    <div class="blog-post-sidebar">
      <p>Other posts by the author:</p>
      <ul>
        <li>...</li>
        <li>...</li>
      </ul>
    </div>

    Rest without any selector
  </app-blog-post>
  <br> 
  <h1>ng template</h1> 
  <ng-container *ngTemplateOutlet="template1">
    Container info...
  </ng-container>
  <ng-template #template1>
    Template info...
  </ng-template>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
