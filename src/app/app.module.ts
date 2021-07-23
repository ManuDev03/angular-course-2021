import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import { CalcAppComponent } from './calc-app/calc-app.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
