import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';
import { JQUERY_TOKEN } from '../index';

@Directive({
  selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
  private el: HTMLElement;
  @Input('modal-trigger') modalId: string;      // rename modal-trigger to modalId - can't have a - in variable name

  constructor(ref: ElementRef, @Inject(JQUERY_TOKEN) private $: any) {
    this.el = ref.nativeElement;
   }

  ngOnInit() {
    this.el.addEventListener('click', e => {
      this.$(`#${this.modalId}`).modal({});
    });
  }
}
