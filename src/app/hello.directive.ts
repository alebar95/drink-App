import { Directive, ElementRef } from '@angular/core';

@Directive({ selector: '[myHello]' })
export class HelloDirective {
  constructor(el: ElementRef) {
    el.nativeElement.innerHTML = 'Hello!';
  }
}
