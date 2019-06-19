import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="main-container">
  <header class="header header-6">
    <div class="branding">
    </div>
    <div class="header-nav">
      <a routerLink="/home" class="nav-link nav-text" routerLinkActive="active">Home</a>
      <a routerLink="/list" class="nav-link nav-text" routerLinkActive="active">Files</a>
      <a routerLink="/add-guitar" class="nav-link nav-text" routerLinkActive="active">Add Guitar</a>
    </div>
  </header>

  <router-outlet></router-outlet>
  </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'guitars';
}
