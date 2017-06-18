import { Component, OnInit, Inject } from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from "@angular/material";
import {ApiServiceService} from "../../../services/api-service.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  token = JSON.parse(localStorage.getItem('token'));
  private errorMessage: string;
  private itemName: string;
  private courseNumber: number;
  private semester: number;
  private schoolItems: any;

  /*Отримання інформації при ініціалізації*/
  constructor(public dialogRef: MdDialogRef<SettingsComponent>,
              public apiServiceService: ApiServiceService,
              @Inject(MD_DIALOG_DATA) public data: any) {
    this.courseNumber = this.data.courseNumber;
    this.semester = this.data.semester;
    this.schoolItems = this.getSchoolItems(this.semester);
  }

  /*Отримання всех предметів*/
  getSchoolItems(semester) {
    this.apiServiceService.getSchoolItems(this.courseNumber, semester)
      .subscribe(
        data => {
          this.schoolItems =  data;
        },
        error => this.errorMessage = <any>error);
  };

  /*Створення предмета*/
  createSchoolItem() {
    let data = {
      name: this.itemName,
      courseNumber: this.courseNumber,
      semester: this.semester
    };
    this.apiServiceService.createSchoolItem(data)
      .subscribe(
        data => {
          this.itemName = '';
          console.log('School item created: ',data);
          this.getSchoolItems(this.semester);
        },
        error => this.errorMessage = <any>error);
  }

  /*Видалення вибраного предмету*/
  removeItem(id) {
    this.apiServiceService.removeSchoolItem(id)
      .subscribe(
        data => {
          console.log('School item deleted');
          this.getSchoolItems(this.semester);
        },
        error => this.errorMessage = <any>error);
  }

  ngOnInit() {
  }

}
