import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-product-entry',
  templateUrl: './product-entry.component.html',
  styleUrls: ['./product-entry.component.css']
})
export class ProductEntryComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
    productForm = this.fb.group({
      pid:[],
      name:[],
      price:[],
      description:[]
    })
  

  ngOnInit(): void {
  }


}
