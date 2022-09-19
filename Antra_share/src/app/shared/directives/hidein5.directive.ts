import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[appHidein5]'
})
export class Hidein5Directive {

  constructor(private el: ElementRef) {
    console.log(el);
    setTimeout(() => {
      el.nativeElement.style.display = 'none';
    }, 5000)
  }
}
