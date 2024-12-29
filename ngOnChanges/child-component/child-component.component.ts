import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-componenet',
  imports: [],
  templateUrl: './child-componenet.component.html',
  styleUrl: './child-componenet.component.css'
})
export class ChildComponenetComponent implements OnChanges{

  @Input() items:any[]=[]

  ngOnChanges(changes: SimpleChanges): void {
    
    if(changes['items']){
      console.log('Items Changed :', changes['items']);
    }
  }
}
