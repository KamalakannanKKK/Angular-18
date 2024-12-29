import { AfterContentInit, AfterViewInit, Component, ContentChild, contentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';

@Component({
  selector: 'app-simple-message',
  imports: [],
  templateUrl: './simple-message.component.html',
  styleUrl: './simple-message.component.css'
})
export class SimpleMessageComponent implements AfterContentInit{

  @ContentChildren('messageContent') messageList!:QueryList<ElementRef>

  ngAfterContentInit(): void {
    this.messageList.forEach(element => {
      console.log("Element Content :",element.nativeElement.textContent)
    });
  }

}
