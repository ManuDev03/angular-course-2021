import { Component, OnInit } from '@angular/core';
import { DateService } from '../date.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  constructor(private obj:DateService) { 
    console.log("Date component instantiantiated",obj.getTime_Date())
  }

  ngOnInit(): void {
  }

}
 