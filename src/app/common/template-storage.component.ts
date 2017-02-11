import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { TemplateService } from './services/template.service';

@Component({
  selector: 'template-storage',
  template: `
    <template #header><h1>The Header</h1></template>
    <template #footer><h3>The Footer</h3></template>
  `
})
export class TemplateStorage implements AfterViewInit {
  @ViewChild('header') headerTemplate;
  @ViewChild('footer') footerTemplate;

  constructor(private service: TemplateService) { }

  ngAfterViewInit() {
    this.service.templates.set('header', this.headerTemplate);
    this.service.templates.set('footer', this.footerTemplate);
  }
}