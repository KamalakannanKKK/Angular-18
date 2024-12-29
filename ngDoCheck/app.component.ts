import { CommonModule } from '@angular/common';
import { Component, DoCheck, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HighLightDirective } from './high-light.directive';
import { FormComponent } from './form/form.component';
import { CarListComponent } from './car-list/car-list.component';
import { ChildComponenetComponent } from './child-componenet/child-componenet.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements DoCheck{
 
    title="Welcome to Angular 18"

    message:string=''
    previousMessage=''

ngDoCheck(): void {
  if(this.previousMessage!==this.message){
  console.log("Message Value Changed..", this.message)
  this.previousMessage=this.message
  }
}
  
}
