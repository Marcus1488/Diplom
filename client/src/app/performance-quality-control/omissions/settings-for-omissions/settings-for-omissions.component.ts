import {Component, Inject, OnInit} from '@angular/core';
import {ApiServiceService} from "../../../services/api-service.service";
import {MD_DIALOG_DATA, MdDialogRef} from "@angular/material";

@Component({
  selector: 'app-settings-for-omissions',
  templateUrl: './settings-for-omissions.component.html',
  styleUrls: ['./settings-for-omissions.component.scss']
})
export class SettingsForOmissionsComponent implements OnInit {
  token = JSON.parse(localStorage.getItem('token'));
  private errorMessage: string;
  private courseNumber: number;
  private semester: number;
  private selectedMonths: any[];
  private monthsList: any;

  /*Отримання інформації при ініціалізації*/
  constructor(public dialogRef: MdDialogRef<SettingsForOmissionsComponent>,
              public apiServiceService: ApiServiceService,
              @Inject(MD_DIALOG_DATA) public data: any) {
    this.courseNumber = this.data.courseNumber;
    this.semester = this.data.semester;
    this.getMonths(this.semester);

    this.monthsList = [
      {
        name: "Січень",
        courseNumber: this.courseNumber,
        semester: this.semester
      },
      {
        name: 'Лютий',
        courseNumber: this.courseNumber,
        semester: this.semester
      },
      {
        name: 'Березень',
        courseNumber: this.courseNumber,
        semester: this.semester
      },
      {
        name: 'Квітень',
        courseNumber: this.courseNumber,
        semester: this.semester
      },
      {
        name: 'Травень',
        courseNumber: this.courseNumber,
        semester: this.semester
      },
      {
        name: 'Червень',
        courseNumber: this.courseNumber,
        semester: this.semester
      },
      {
        name: 'Липень',
        courseNumber: this.courseNumber,
        semester: this.semester
      },
      {
        name: 'Серпень',
        courseNumber: this.courseNumber,
        semester: this.semester
      },
      {
        name: 'Вересень',
        courseNumber: this.courseNumber,
        semester: this.semester
      },
      {
        name: 'Жовтень',
        courseNumber: this.courseNumber,
        semester: this.semester
      },
      {
        name: 'Листопад',
        courseNumber: this.courseNumber,
        semester: this.semester
      },
      {
        name: 'Грудень',
        courseNumber: this.courseNumber,
        semester: this.semester
      }
    ]
  }

  /*Отримання всіх місяців*/
  getMonths(semester) {
    this.apiServiceService.getMonths(this.courseNumber, semester)
      .subscribe(
        data => {
          this.selectedMonths = data;
        },
        error => this.errorMessage = <any>error);
  };

  /*Оновлення місяців*/
  updateMonths() {
    this.apiServiceService.updateMonths(this.selectedMonths, this.courseNumber, this.semester)
      .subscribe(
        data => {
          console.log('Month updated');
        },
        error => this.errorMessage = <any>error);
  }

  ngOnInit() {
  }

}
