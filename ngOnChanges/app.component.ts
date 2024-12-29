import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
export class AppComponent {
 
    title="Welcome to Angular 18"

    items=[{
  id:1,name:'kamal'
    },
    {
      id:2,name:'kannan'
        },
        {
          id:3,name:'kamalakannan'
            },
            {
              id:2,name:'kannan'
                }
      ]
    

}
