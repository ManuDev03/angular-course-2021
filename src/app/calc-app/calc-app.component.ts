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
  operator=""
  eq_opr =""
  constructor() { }

  ngOnInit(): void {
  }


  add(){
    this.result =parseInt(this.value1)+parseInt(this.value2)
  }
  setValue(num){
    console.log(num)
    if(this.operator==""){
      this.value1=num
    }
    else{
      this.value2=num
    }
  }
  setOpreator(opr){
    this.operator = opr
    console.log(this.operator)

  }

}
