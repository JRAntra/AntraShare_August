import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appRemoveAfter]'
})
export class RemoveAfterDirective {

  constructor(readonly element: ElementRef) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.element.nativeElement.hidden = true;
    }, 5000);
  }
  

}
