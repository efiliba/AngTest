import { Component } from '@angular/core';

@Component({
  selector: 'nav-bar',
  template: `
    <div class="well">
      <h4>Nav Bar</h4>
      <nav>
        <a routerLink='' routerLinkActive='active' [routerLinkActiveOptions]='{exact: true}'>Home</a>
        <a [routerLink]="['/test', 5]" routerLinkActive='active'>Test</a>
        <a routerLink='/starwars' routerLinkActive='active'>Star wars</a>
      </nav>
    </div>
  `,
  styles: [`
    a {
      text-decoration: none;
    }

    a.active {
      text-decoration: underline;
    }
  `]
})
export class NavBarComponent { }
