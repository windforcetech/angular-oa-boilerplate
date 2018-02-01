import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({ selector: '[appMifaFont]' })

export class MifaFontDirective implements OnInit {
  private elem: ElementRef;
  private renderer: Renderer2;

  constructor(elem: ElementRef, renderer: Renderer2) {
    this.elem = elem;
    this.renderer = renderer;
  }

  ngOnInit() {
    this.renderer.setAttribute(this.elem.nativeElement, 'color', '#384452');
    this.renderer.setAttribute(this.elem.nativeElement, 'font-size', '32px');
  }
}
