import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc-app',
  templateUrl: './calc-app.component.html',
  styleUrls: ['./calc-app.component.css']
})
export class CalcAppComponent implements OnInit {
  value1:string
  value2:string
  result:number
  constructor() { }

  ngOnInit(): void {
  }

  getValue1($event:any){
    this.value1=$event.target.value

  }
  
  getValue2($event:any){
    this.value2=$event.target.value

  }
  add(){
    this.result =parseInt(this.value1)+parseInt(this.value2)
  }

}
