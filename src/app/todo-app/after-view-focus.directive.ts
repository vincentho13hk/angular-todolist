import { Directive, AfterViewInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAfterViewFocus]'
})
export class AfterViewFocusDirective implements AfterViewInit {

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    this.elementRef.nativeElement.focus();
  }

}
