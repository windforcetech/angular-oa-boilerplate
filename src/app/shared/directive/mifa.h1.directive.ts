import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({ selector: '[appMifaH1]' })

export class MifaH1Directive implements OnInit {
  private elem: ElementRef;
  private renderer: Renderer2;

  constructor(elem: ElementRef, renderer: Renderer2) {
    this.elem = elem;
    this.renderer = renderer;
  }

  ngOnInit() {
    this.renderer.setAttribute(this.elem.nativeElement, 'style', 'color: #384452; font-size: 32px;');
  }
}
