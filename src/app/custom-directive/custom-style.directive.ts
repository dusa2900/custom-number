import { Directive,  HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[Style]'
})
export class CustomStyleDirective {

 @HostBinding('style.color')
 color!:string;
  constructor() {}

  @HostListener('mouseover') 
  onMouseOver() {
    this.color="blue"
    console.log("Mouse over")
  }
 
  @HostListener('mouseleave') 
  onMouseLeave() {
    this.color="red"
    console.log("Mouse Leave")
  }
 
}
