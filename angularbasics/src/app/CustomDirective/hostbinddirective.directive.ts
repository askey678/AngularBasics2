import { style } from '@angular/animations';
import { Directive, ElementRef, HostListener, HostBinding, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostbinddirective]'
})
export class HostbinddirectiveDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }


  // this is the concept of hostbinding we are binding the html property of the element which 
  // we are getting as a argument in constructor to local property of our class
  @HostBinding('style.backgroundColor')
  background: string = '#fff';


  @HostBinding('style.border')
  border: string = 'none';


  // let's handle that element with events using hostlistener for better representation
  @HostListener('mouseenter') mouseenter() {
    this.background = '#6a92b3';
    this.border  = 'solid 1px'
  }

  @HostListener('mouseleave') mouseleave() {
    this.background = '#fff';
    this.border = 'none'
  }

}
