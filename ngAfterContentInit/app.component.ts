import { CommonModule } from '@angular/common';
import { Component, DoCheck, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HighLightDirective } from './high-light.directive';
import { FormComponent } from './form/form.component';
import { CarListComponent } from './car-list/car-list.component';
import { ChildComponenetComponent } from './child-componenet/child-componenet.component';
import { SimpleMessageComponent } from './simple-message/simple-message.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,FormsModule,SimpleMessageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
 
    title="Welcome to Angular 18"

  
}
