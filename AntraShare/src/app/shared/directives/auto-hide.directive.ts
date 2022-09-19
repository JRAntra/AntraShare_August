import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[autohide]'
})
export class AutoHideDirective {

  constructor(private elementRef : ElementRef) {
    setTimeout(() => {
      this.elementRef.nativeElement.hidden = true;
    }, 5000);
  }

}
