import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  myform=new FormGroup({
    fname :new FormControl(''),
    lname :new FormControl(''),
    email :new FormControl(''),
    password :new FormControl(''),
    address:new FormGroup({
      houseno: new FormControl(''),
      dist:new FormControl(''),
      city:new FormControl('')
    })

  })

  constructor() { }

  ngOnInit(): void {
  }
  save(){
    console.log(this.myform.value)
  }

}
