import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HighLightDirective } from './high-light.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
  title="Angular 18"

  sliceContent="Hello, I am going to cut the Hello"

  items:string[]=["items1","items2","items3","items4","items5"]
  
}
