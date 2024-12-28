
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  @Input()  appHighLight='';

  constructor(private el:ElementRef) { }

@HostListener('mouseenter')  highlightcolor(){
  this.highLightmethod(this.appHighLight||'yellow');
}

@HostListener('mouseleave')  Unhighlightcolor(){
  this.highLightmethod('');
}
  highLightmethod(color:string){
     this.el.nativeElement.style.backgroundColor=color;
  }

}
