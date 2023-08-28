import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit() {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', '#');
    this.renderer.addClass(this.element.nativeElement, 'search-container');
    this.renderer.setAttribute(this.element.nativeElement, 'title', 'search any course');
  }

}
