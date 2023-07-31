import 'zone.js/dist/zone';
import { Component, ElementRef, Renderer2 } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ApplicationModule } from './app.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, ApplicationModule],
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

  <ng-template #template1 let-name="name">
    Template info...
  </ng-template>
  <ng-container *ngTemplateOutlet="template1">
    Container info...
  </ng-container>

  <h1>ng template with context</h1> 

  <ng-template #template2 let-name="name">
    The name in context is: {{name}}
  </ng-template>
  <ng-container [ngTemplateOutlet]="template2" [ngTemplateOutletContext]="{name: 'toto'}">
    Container info...
  </ng-container>

  <h1>Renderer2</h1>
  <button (click)="changeColor()">Change Color</button>
  `,
})
export class App {
  name = 'Angular';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  changeColor() {
    const button = this.elementRef.nativeElement.querySelector('button');
    this.renderer.setStyle(button, 'background-color', 'blue');
    this.renderer.setStyle(button, 'color', 'white');
  }
}

bootstrapApplication(App);
