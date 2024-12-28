import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HighLightDirective } from './high-light.directive';
import { FormComponent } from './form/form.component';
import { CarListComponent } from './car-list/car-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,FormComponent,CarListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
  title="Welcome to Angular 18"

  carNames:string[]=[]

  addtoList(carName:String){
    this.carNames.push(carName.toString())
  }
}
