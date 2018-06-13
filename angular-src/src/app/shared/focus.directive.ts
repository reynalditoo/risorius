import { Directive, Renderer2, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostBinding('class.focus') isFocus: boolean = false;
  /*@HostBinding('style.position') position: string;
  @HostBinding('style.left') left: string;
  @HostBinding('style.top') top: string;
  @HostBinding('style.zIndex') zIndex: string;
  @HostBinding('style.') left: string;*/

  @HostListener('click') onFocus() {
    /*this.renderer.setStyle(this.elRef.nativeElement, 'margin-left', '5px');*/
	/*this.position = 'absolute';
	this.left = '50%';
	this.top = '300px';
	this.zIndex = '1';*/
	this.isFocus = !this.isFocus;
  }
   @HostListener('blur') unFocus() {
    /*this.renderer.setStyle(this.elRef.nativeElement, 'margin-left', '5px');*/
	/*this.position = 'absolute';
	this.left = '50%';
	this.top = '300px';
	this.zIndex = '1';*/
	this.isFocus = !this.isFocus;
  }

}
