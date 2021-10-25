import { Directive, ElementRef ,HostListener} from '@angular/core';

@Directive({
  selector: '[customNumberOnly]'
})
export class CustomNumberDirective {

  constructor(private el:ElementRef) { }

  public  regEx = new RegExp('^[0-9]*$');
  public specialKeys:Array<string>=['Backspace','ArrowLeft','ArrowRight','Delete']



  @HostListener('keydown',['$event']) 
  onKeyDown(event:any)
  {
    if(this.specialKeys.indexOf(event.key) !== -1)
    {
      return;
    }
    const inputValue=this.el.nativeElement.value.concat(event.key);
    console.log(event.key);
    if(inputValue && !String(inputValue).match(this.regEx))
    {
      event.preventDefault();
    }
  return ;   
  }
  



}
