import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[efRepeat]'
})
export class RepeatDirective {
  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

  @Input() set efRepeatUpTo(upTo:number) {
    this.viewContainer.clear();
    for (let index = 0; index < upTo; index++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        $implicit: index        // Root value of the upTo element
      });
    }
  }
}
