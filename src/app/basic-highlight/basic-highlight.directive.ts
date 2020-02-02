import { Directive, ElementRef, OnInit } from '@angular/core';
@Directive({
    selector: '[appBasicHighligh]'
})

export class BasicHighlightDirective implements OnInit {
    constructor(private elementRef: ElementRef) {}


ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'rosybrown';
}
}
