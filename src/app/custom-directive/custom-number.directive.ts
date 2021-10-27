import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[numberDirective]'
})
export class CustomNumberDirective {

  private regEx = new RegExp('^[0-9]*$');

  constructor(private el: ElementRef) { }

  @HostListener('keypress', ['$event'])
  onKeyPress(event: any) {
    const keyValue = this.el.nativeElement.value.concat(event.key);
    if (!String(keyValue).match(this.regEx)) {
      event.preventDefault()
    }
    return;
  }

  @HostListener('focus')
  onFocus() {
    const numberValue = this.el.nativeElement.value;
    if (!String(numberValue).match(this.regEx)) {
      this.el.nativeElement.value = "";
    }
  }


}
