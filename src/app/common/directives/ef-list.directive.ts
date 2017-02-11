import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[efList]'
})
export class ListDirective {
  list: string;

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

  @Input() set efList(value: string) {
    if (this.list == null) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.list = value || '';
    } else {
      const node = this.templateRef.elementRef.nativeElement.nextSibling;
      node.innerHTML = this.list = `${this.list}---${value}`;
    }
  }
}