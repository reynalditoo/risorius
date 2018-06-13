import { Directive, Renderer2, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appTimeout]'
})
export class TimeoutDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  	setTimeout(() => {
  		this.elRef.nativeElement.style.display = 'none'
  	}, 5000);
   }

}
