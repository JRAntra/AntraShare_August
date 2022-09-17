import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appRegisterNow]'
})
export class RegisterNowDirective implements OnInit {

  constructor(private element : ElementRef) { }



  ngOnInit(): void {
    setTimeout(() => {
      this.element.nativeElement.hidden = true
    }, 5000)
  }

}
