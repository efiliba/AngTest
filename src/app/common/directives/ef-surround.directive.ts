import { Directive, Input, TemplateRef, ViewContainerRef, AfterViewInit } from '@angular/core';
import { TemplateService } from '../services/template.service';

@Directive({
  selector: '[efSurround]'
})
export class SurroundDirective implements AfterViewInit {
  constructor(private service: TemplateService, private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

  ngAfterViewInit() {
    this.viewContainer.createEmbeddedView(this.service.templates.get('header'));
    this.viewContainer.createEmbeddedView(this.templateRef);
    this.viewContainer.createEmbeddedView(this.service.templates.get('footer'));
  }
}