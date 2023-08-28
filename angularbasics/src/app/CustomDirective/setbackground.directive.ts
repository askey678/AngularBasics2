import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[setBackground] '
})

export class SetBackgroundDirective implements OnInit {

    constructor(private element: ElementRef) {
        this.element = element;
    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        this.element.nativeElement.style.backgroundColor = "#b2d39e";
        this.element.nativeElement.style.borderRadius="25px";

    }

}