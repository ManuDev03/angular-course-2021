import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import { CalcAppComponent } from './calc-app/calc-app.component';
import { StudentModule } from './student/student.module'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EditorComponent } from './editor/editor.component';
import { ProductEntryComponent } from './product-entry/product-entry.component';
import { DateComponent } from './date/date.component'



@NgModule({
  declarations: [
    AppComponent,
    CalcAppComponent,
    EditorComponent,
    ProductEntryComponent,
    DateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    StudentModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
