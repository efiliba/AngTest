import { Component } from '@angular/core';

@Component({
  selector: 'nav-bar',
  template: `
    <div class="well">
      <h4>Nav Bar</h4>
      <a [routerLink]="['/']">Home</a>
      <a [routerLink]="['/test', 5]">Test</a>
    </div>
  `
})
export class NavBarComponent { }
