import 'hammerjs';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '@angular/material';
import {Md2Module}  from 'md2';

import {AppComponent} from './app.component';
import {appRouting} from "./app.routing";
import {HomeComponent} from './home/home.component';
import {InfoStudentsComponent} from './info-students/info-students.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';


import {
  DxDataGridModule,
  DxCalendarModule
} from 'devextreme-angular';
import {CalendarComponent} from './calendar/calendar.component';
import {PerformanceQualityControlComponent} from './performance-quality-control/performance-quality-control.component';
import {CreateStudentsComponent} from './info-students/create-students/create-students.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoStudentsComponent,
    CalendarComponent,
    PerformanceQualityControlComponent,
    CreateStudentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
    MaterialModule,
    Md2Module,
    HttpModule,
    appRouting,
    FlexLayoutModule,
    DxDataGridModule,
    DxCalendarModule
  ],
  entryComponents: [CreateStudentsComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
