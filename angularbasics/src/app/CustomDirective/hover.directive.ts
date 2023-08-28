import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {

   }

   @HostListener('mouseenter')
   onmouseover(){
    this.renderer.setStyle(this.element.nativeElement, 'width', '300px');
    this.renderer.setStyle(this.element.nativeElement, 'height', '170px');
    this.renderer.setStyle(this.element.nativeElement, 'transition', '0.5s');
  }

  @HostListener('mouseleave')
  onmouseout(){
   this.renderer.setStyle(this.element.nativeElement, 'width', '290px');
   this.renderer.setStyle(this.element.nativeElement, 'height', '160px');
   this.renderer.setStyle(this.element.nativeElement, 'transition', '0.5s');
 }

}
