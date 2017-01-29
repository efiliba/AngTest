import { Component, OnInit, Inject } from '@angular/core';
import { TOASTR_TOKEN } from '../../common/index';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  // selector: 'app-test',
  template: `
    <div class="well" modal-trigger="simple-modal">
      {{title}}
      <button class="btn btn-primary" (click)="navigateHome()">Click to navigate home from code</button>
    </div>

    <simple-modal elementId="simple-modal" title="Modal Title">
      <h4>Hello Modal</h4>
    </simple-modal>
  `
})
export class TestComponent implements OnInit {
  title = `Test Page - click for modal`;

  constructor(@Inject(TOASTR_TOKEN) private toastr: Toastr, private route: ActivatedRoute, private router: Router) {
  }
  
  ngOnInit() {
    this.toastr.success(`Route parameter: ${this.route.snapshot.params['id']}`);
    this.toastr.error(`jQuery version: ${jQuery.fn.jquery}`);
  }

  navigateHome() {
    this.router.navigate(['/']);
  }
}
