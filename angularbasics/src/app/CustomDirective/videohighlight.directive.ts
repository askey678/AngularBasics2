import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appVideohighlight]'
})
export class VideohighlightDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {

   }

   @Input() set appVideohighlight(condition: boolean){
    if(condition){
      this.renderer.addClass(this.element.nativeElement, 'highlight');
    }else{
      this.renderer.addClass(this.element.nativeElement, 'feedback-card');
    }
   }

}
