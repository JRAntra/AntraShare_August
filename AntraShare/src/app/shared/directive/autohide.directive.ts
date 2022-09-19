import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[appAutohide]'
})
export class AutohideDirective {

  constructor(private elementRef : ElementRef) {
    setTimeout(() => {
      this.elementRef.nativeElement.hidden = true;
    }, 5000);
  }

}
