import { Directive, ElementRef, Renderer2, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appBg]'
})
export class BgDirective {

 @Input('appBg') bgColor;


  constructor(
    private element : ElementRef, 
    private renderer : Renderer2
  ) { }

}
