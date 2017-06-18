import {Component, Input, OnInit, Pipe, PipeTransform} from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import {SettingsComponent} from "../settings/settings.component";
import {ApiServiceService} from "../../../services/api-service.service";
import {GlobalService} from "../../../services/global.service";

@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
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
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  @Input() courseNumber: number;
  token = JSON.parse(localStorage.getItem('token'));

  errorMessage: any;
  firstSemesterItems: any;
  secondSemesterItems: any;
  performanceAllData: any = {
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
    this.updateAllInfo();
  };

  /*Отримання всієї інформації*/
  updateAllInfo() {
    this.getSchoolItems(this.courseNumber);
    this.getAllPerformance(this.courseNumber);
  }

  /*Оновлення інформації по оцінкам для обраного студента*/
  updateRating(e) {
    let data;

    for (let key in e.data) {
      data = e.key[key];
    }

    this.apiServiceService.updateRatingById(data.rating)
      .subscribe(
        data => {
          console.log('Rating updated');
        },
        error => this.errorMessage = <any>error);
  }

  /*Отримання всех предметів для обраного семестру*/
  getSchoolItems(courseNumber) {
    this.apiServiceService.getSchoolItems(courseNumber, 1)
      .subscribe(
        data => {
          this.firstSemesterItems = data;
        },
        error => this.errorMessage = <any>error);
    this.apiServiceService.getSchoolItems(courseNumber, 2)
      .subscribe(
        data => {
          this.secondSemesterItems = data;
        },
        error => this.errorMessage = <any>error);
  };

  /*Отримання всіх оцінок для двох семестрів*/
  getAllPerformance(courseNumber) {
    this.apiServiceService.getAllPerformance(courseNumber, 1)
      .subscribe(
        data => {
          this.performanceAllData.firstSemester = data;
        },
        error => this.errorMessage = <any>error);
    this.apiServiceService.getAllPerformance(courseNumber, 2)
      .subscribe(
        data => {
          this.performanceAllData.secondSemester = data;
        },
        error => this.errorMessage = <any>error);
  };

  /*Відкриття вікна для редагування предметів*/
  openSettingItems(semester) {
    let dialogRef = this.dialog.open(SettingsComponent, {
      data: {
        courseNumber: this.courseNumber,
        semester: semester,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getSchoolItems(this.courseNumber);
      this.getAllPerformance(this.courseNumber);
    });
  };

}
