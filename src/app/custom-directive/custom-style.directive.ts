import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[customStyle]'
})
export class CustomStyleDirective {

 @HostBinding('style.color')
 color!:string;
  constructor(private el:ElementRef) { 
     
  }

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
