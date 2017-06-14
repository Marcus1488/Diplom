export declare let require: any;

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
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  DxDataGridModule,
  DxCalendarModule
} from 'devextreme-angular';
import {PerformanceQualityControlComponent} from './performance-quality-control/performance-quality-control.component';
import {CreateStudentsComponent} from './info-students/create-students/create-students.component';
import {StudentsComponent} from './info-students/students/students.component';
import {BeneficiariesComponent} from './info-students/beneficiaries/beneficiaries.component';
import {ParentComponent} from './info-students/parent/parent.component';
import {ActiveGroupsComponent} from './info-students/active-groups/active-groups.component';
import {PdfViewerComponent} from 'ng2-pdf-viewer';
/*Services*/
import {ApiServiceService} from "./services/api-service.service";
import {InfoParentsComponent} from './info-parents/info-parents.component';
import {DeleteStudentComponent} from './info-students/delete-student/delete-student.component';
import {PerformanceComponent} from './performance-quality-control/performance/performance.component';
import {OmissionsComponent} from './performance-quality-control/omissions/omissions.component';
import {TotalPerformanceComponent} from './performance-quality-control/total/total.component';
import {SettingsComponent} from './performance-quality-control/performance/settings/settings.component';
import {CourseComponent, KeysPipe} from './performance-quality-control/performance/course/course.component';
import {
  CourseForOmissionsComponent,
  OmissionKeysPipe
} from './performance-quality-control/omissions/course-for-omissions/course-for-omissions.component';
import {SettingsForOmissionsComponent} from './performance-quality-control/omissions/settings-for-omissions/settings-for-omissions.component';
import {
  CourseTotalComponent,
  KeysTotalPipe
} from './performance-quality-control/total/course-total/course-total.component';
import {HolidaysComponent} from './home/holidays/holidays.component';
import {locale, loadMessages} from 'devextreme/localization';
import 'devextreme-intl';
import {LoginComponent} from './login/login.component';
import {DocumentationComponent} from './documentation/documentation.component';
import {EditDefaultInfoComponent} from './home/edit-default-info/edit-default-info.component';
import { ViewInfoParentsComponent } from './info-parents/view-info-parents/view-info-parents.component';
import { DeleteParentsComponent } from './info-parents/delete-parents/delete-parents.component';
import { TypeNumberDirective } from './type-number.directive';

let messagesUk = require("./../uk.json");
loadMessages(messagesUk);
locale("uk");

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoStudentsComponent,
    PerformanceQualityControlComponent,
    CreateStudentsComponent,
    StudentsComponent,
    BeneficiariesComponent,
    ParentComponent,
    ActiveGroupsComponent,
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
    OmissionKeysPipe,
    KeysTotalPipe,
    CourseTotalComponent,
    HolidaysComponent,
    LoginComponent,
    DocumentationComponent,
    PdfViewerComponent,
    EditDefaultInfoComponent,
    ViewInfoParentsComponent,
    DeleteParentsComponent,
    TypeNumberDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
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
    SettingsForOmissionsComponent,
    HolidaysComponent,
    EditDefaultInfoComponent,
    ViewInfoParentsComponent,
    DeleteParentsComponent
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
