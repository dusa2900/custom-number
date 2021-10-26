import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[NumberOnly]'
})
export class CustomNumberDirective {

  constructor(private el: ElementRef) { }

  private regEx = new RegExp('^[0-9]*$');

  @HostListener('keypress', ['$event'])
  onKeyPress(event: any) {
    const value = this.el.nativeElement.value.concat(event.key);
    if (!String(value).match(this.regEx)) {
      event.preventDefault()
    }
    return;
  }


}
