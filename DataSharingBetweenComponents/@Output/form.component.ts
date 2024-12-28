import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  @Output() carAdded=new EventEmitter<String>();

  carName:string=''

  onSubmit(){
    console.log(this.carName)
    //sending this value outside
    this.carAdded.emit(this.carName)
    this.carName=''
  }
}
