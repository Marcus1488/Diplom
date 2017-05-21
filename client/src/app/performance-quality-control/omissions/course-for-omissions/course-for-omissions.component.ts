import {Component, Input, OnInit} from '@angular/core';
import {MdDialog} from "@angular/material";
import {ApiServiceService} from "../../../services/api-service.service";
import {SettingsForOmissionsComponent} from "../settings-for-omissions/settings-for-omissions.component";

@Component({
  selector: 'app-course-for-omissions',
  templateUrl: './course-for-omissions.component.html',
  styleUrls: ['./course-for-omissions.component.scss']
})
export class CourseForOmissionsComponent implements OnInit {
  @Input() courseNumber: number;

  errorMessage: any;
  firstSemesterItems: any;
  secondSemesterItems: any;
  performanceAllData: any = {
    firstSemester: [],
    secondSemester: []
  };

  constructor(public dialog: MdDialog,
              private apiServiceService: ApiServiceService) {
  }

  ngOnInit() {
    this.getSchoolItems(this.courseNumber);
    this.getAllPerformance(this.courseNumber);
  };

  updateRating(e) {
   /* let data;

    for (let key in e.data) {
      data = e.key[key];
    }

    this.apiServiceService.updateRatingById(data.rating)
      .subscribe(
        data => {
          console.log('Rating updated');
        },
        error => this.errorMessage = <any>error);*/
  }

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

  openSettingItems(semester) {
    let dialogRef1 = this.dialog.open(SettingsForOmissionsComponent, {
      data: {
        courseNumber: this.courseNumber,
        semester: semester,
      }
    });
    dialogRef1.afterClosed().subscribe(result => {
    });
  };
}
