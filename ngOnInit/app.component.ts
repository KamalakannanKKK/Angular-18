import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HighLightDirective } from './high-light.directive';
import { FormComponent } from './form/form.component';
import { CarListComponent } from './car-list/car-list.component';
import { ChildComponenetComponent } from './child-componenet/child-componenet.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,FormComponent,ChildComponenetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
 
    title="Welcome to Angular 18"

    message=""


    ngOnInit(): void {
      this.message="Welcome to Angular 18 - Lifecycle Hook"
    }

}
