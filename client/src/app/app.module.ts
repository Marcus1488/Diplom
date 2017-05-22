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
import {StudentsComponent} from './info-students/students/students.component';
import {BeneficiariesComponent} from './info-students/beneficiaries/beneficiaries.component';
import {ParentComponent} from './info-students/parent/parent.component';
import {ActiveGroupsComponent} from './info-students/active-groups/active-groups.component';
import {TotalComponent} from './info-students/total/total.component';

/*Services*/
import {ApiServiceService} from "./services/api-service.service";
import { InfoParentsComponent } from './info-parents/info-parents.component';
import { DeleteStudentComponent } from './info-students/delete-student/delete-student.component';
import { PerformanceComponent } from './performance-quality-control/performance/performance.component';
import { OmissionsComponent } from './performance-quality-control/omissions/omissions.component';
import { TotalPerformanceComponent } from './performance-quality-control/total/total.component';
import { SettingsComponent } from './performance-quality-control/performance/settings/settings.component';
import {CourseComponent, KeysPipe} from './performance-quality-control/performance/course/course.component';
import {
  CourseForOmissionsComponent,
  OmissionKeysPipe
} from './performance-quality-control/omissions/course-for-omissions/course-for-omissions.component';
import { SettingsForOmissionsComponent } from './performance-quality-control/omissions/settings-for-omissions/settings-for-omissions.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoStudentsComponent,
    CalendarComponent,
    PerformanceQualityControlComponent,
    CreateStudentsComponent,
    StudentsComponent,
    BeneficiariesComponent,
    ParentComponent,
    ActiveGroupsComponent,
    TotalComponent,
    InfoParentsComponent,
    DeleteStudentComponent,
    PerformanceComponent,
    OmissionsComponent,
    TotalPerformanceComponent,
    SettingsComponent,
    CourseComponent,
    KeysPipe,
    CourseForOmissionsComponent,
    SettingsForOmissionsComponent,
    OmissionKeysPipe
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
  entryComponents: [
    CreateStudentsComponent,
    DeleteStudentComponent,
    SettingsComponent,
    SettingsForOmissionsComponent],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
