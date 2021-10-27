import { Directive,  HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[styleDirective]'
})
export class CustomStyleDirective {

  @HostBinding('style.color')  color!: string;

  @HostListener('mouseover')
  onMouseOver() {     this.color = "blue"  }

  @HostListener('mouseleave')
  onMouseLeave() {    this.color = "red"  }

}
