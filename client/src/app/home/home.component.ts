import {Component, OnInit} from '@angular/core';
import {HolidaysComponent} from "./holidays/holidays.component";
import {MdDialog} from "@angular/material";
import {ApiServiceService} from "../services/api-service.service";
import {EditDefaultInfoComponent} from "./edit-default-info/edit-default-info.component";
import {GlobalService} from "../services/global.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  token = JSON.parse(localStorage.getItem('token'));

  currentValue: Date = new Date();
  minDateValue: Date = undefined;
  maxDateValue: Date = undefined;
  zoomLevels: string[] = [
    "month", "year", "decade", "century"
  ];
  cellTemplate = "cell";
  holidays: any[];
  errorMessage: any;
  config: any = {
    department: '',
    speciality: '',
    discipline: '',
    teacher: '',
    group: {
      name: ''
    }
  };


  constructor(public dialog: MdDialog, private apiServiceService: ApiServiceService, private globalSrv: GlobalService) {
    globalSrv.itemValue.subscribe((token) => {
      this.token = token;
    })
  }

  /*Отримання даних при ініціалізації компонента*/
  ngOnInit() {
    this.getConfig();
    this.getHolidaysByDate();
  }

  /*Отримання подій по вибраній даті*/
  getHolidaysByDate() {
    this.apiServiceService.getHolidaysByDate(this.currentValue)
      .subscribe(
        data => {
          this.holidays = data;
        },
        error => this.errorMessage = <any>error);
  }

  /*Відкриття діалогово вікна з таблицею подій*/
  openHolidays() {
    this.dialog.open(HolidaysComponent);
  }

  /*Запит на api для редагування основної інформації*/
  editDefaultInfo() {
    let dialogRef = this.dialog.open(EditDefaultInfoComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.getConfig();
    });
  }

  /*Отримання конфігу з сервера*/
  getConfig() {
    this.apiServiceService.getConfig()
      .subscribe(
        data => {
          this.config = data;
        },
        error => this.errorMessage = <any>error);
  }
}
