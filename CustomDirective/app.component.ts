import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HighLightDirective } from './high-light.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,CommonModule,HighLightDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sachin Tendulkar';

  movies:String[] =[
     "Zootopia","Amaran","I"
  ]

  clickCount:number=0;

  onSave(){
    this.clickCount=this.clickCount+1;
  }
  
}
