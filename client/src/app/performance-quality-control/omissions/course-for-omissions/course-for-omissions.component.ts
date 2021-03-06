import {Component, Input, OnInit, Pipe, PipeTransform} from '@angular/core';
import {MdDialog} from "@angular/material";
import {ApiServiceService} from "../../../services/api-service.service";
import {SettingsForOmissionsComponent} from "../settings-for-omissions/settings-for-omissions.component";
import {GlobalService} from "app/services/global.service";

@Pipe({name: 'keys'})
export class OmissionKeysPipe implements PipeTransform {
  transform(value, args:string[]) : any {
    let keys = [];
    for (let key in value[0]) {
      if (key !== 'student') {
        keys.push({key: key, value: value[0][key]});
      }
    }
    return keys;
  }
}

@Component({
  selector: 'app-course-for-omissions',
  templateUrl: './course-for-omissions.component.html',
  styleUrls: ['./course-for-omissions.component.scss']
})
export class CourseForOmissionsComponent implements OnInit {
  @Input() courseNumber: number;
  token = JSON.parse(localStorage.getItem('token'));

  errorMessage: any;
  firstSemesterItems: any;
  secondSemesterItems: any;
  omissionAllData: any = {
    firstSemester: [],
    secondSemester: []
  };

  constructor(public dialog: MdDialog,
              private apiServiceService: ApiServiceService, private globalSrv: GlobalService) {
    globalSrv.itemValue.subscribe((token) => {
      this.token = token;
    })
  }

  ngOnInit() {
  };

  /*Отримання інформації для таблиць*/
  updateAllInfo() {
    this.getMonths(this.courseNumber);
    this.getAllOmissions(this.courseNumber);
  }

  /*Оновлення пропусків для вибраного місяця та студента*/
  updateOmissions(e) {
    let data;

    for (let key in e.data) {
      data = e.key[key];
    }

    this.apiServiceService.updateOmissions(data.rating)
      .subscribe(
        data => {
          console.log('Omissions updated');
        },
        error => this.errorMessage = <any>error);
  }

  /*Отримання списку місяців для семестрів*/
  getMonths(courseNumber) {
    this.apiServiceService.getMonths(courseNumber, 1)
      .subscribe(
        data => {
          this.firstSemesterItems = data;
        },
        error => this.errorMessage = <any>error);
    this.apiServiceService.getMonths(courseNumber, 2)
      .subscribe(
        data => {
          this.secondSemesterItems = data;
        },
        error => this.errorMessage = <any>error);
  };

  /*Отримання інформації по пропускам*/
  getAllOmissions(courseNumber) {
    this.apiServiceService.getAllOmissions(courseNumber, 1)
      .subscribe(
        data => {
          this.omissionAllData.firstSemester = data;
        },
        error => this.errorMessage = <any>error);
    this.apiServiceService.getAllOmissions(courseNumber, 2)
      .subscribe(
        data => {
          this.omissionAllData.secondSemester = data;
        },
        error => this.errorMessage = <any>error);
  };

  /*Відкриття модального вікна з налаштуванням місяців*/
  openSettingItems(semester) {
    let dialogRef1 = this.dialog.open(SettingsForOmissionsComponent, {
      data: {
        courseNumber: this.courseNumber,
        semester: semester,
      }
    });
    dialogRef1.afterClosed().subscribe(result => {
      this.getMonths(this.courseNumber);
      this.getAllOmissions(this.courseNumber);
    });
  };
}
