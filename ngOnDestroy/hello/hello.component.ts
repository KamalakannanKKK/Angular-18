import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent implements OnInit,OnDestroy{

  count:number=0
  intervalId:any
 ngOnInit(): void {
   this.intervalId=setInterval(() => {
    this.count++
   }, 1000);
   console.log(this.intervalId)
 }

 ngOnDestroy(): void {
   clearInterval(this.intervalId)
   console.log('Ondestroy timer stopped')
 }

}
