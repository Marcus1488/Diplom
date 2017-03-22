import 'hammerjs';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '@angular/material';

import {AppComponent} from './app.component';
import {appRouting} from "./app.routing";
import {HomeComponent} from './home/home.component';
import {InfoStudentsComponent} from './info-students/info-students.component';

import {
  DxDataGridModule,
  DxCalendarModule
} from 'devextreme-angular';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoStudentsComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouting,
    FlexLayoutModule,
    MaterialModule,
    DxDataGridModule,
    DxCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
