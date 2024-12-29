import { Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { SimpleMessageComponent } from './simple-message/simple-message.component';

export const routes: Routes = [
   {path:'home',component:HelloComponent},
   {path:'simple',component:SimpleMessageComponent},
   {path:'',redirectTo:'home', pathMatch:'full'}
];
