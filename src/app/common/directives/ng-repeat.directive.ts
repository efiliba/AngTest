import { Directive, Input, TemplateRef, ElementRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngRepeat]'
})
export class RepeatDirective {
  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

  @Input() set ngRepeatUpTo(upTo:number) {
    this.viewContainer.clear();
    for (let index = 0; index < upTo; index++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        $implicit: index        // Root value of the upTo element
      });
    }
  }
}
