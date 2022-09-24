import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appTemporaryShow]',
})
export class temporaryShowDirective implements OnInit {
  constructor(private el: ElementRef) {}
  @Input() showWarning: boolean = true;
  @Input() showTime: number = 0
  ngOnInit(): void {
    setTimeout(() => {
      this.el.nativeElement.style.display = 'none';
    }, this.showTime);
  }
}
