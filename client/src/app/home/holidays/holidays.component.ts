import {Component, OnInit} from '@angular/core';
import {MdDialogRef} from "@angular/material";
import {ApiServiceService} from "../../services/api-service.service";
import {log} from "util";

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.scss']
})
export class HolidaysComponent implements OnInit {
  holidays: any[];
  errorMessage: any;

  constructor(private dialogRef: MdDialogRef<HolidaysComponent>,
              private apiServiceService: ApiServiceService) {
  }

  ngOnInit() {
    this.getAllHolidays();
  }

  /*Запит на сервер для отримання всіх подій*/
  getAllHolidays() {
    this.apiServiceService.getHolidays()
      .subscribe(
        data => {
          this.holidays = data;
        },
        error => this.errorMessage = <any>error);
  }

  /*Запит на сервер для створення події*/
  addHoliday(event) {
    let data = event.data;

    this.apiServiceService.addHoliday(data)
      .subscribe(
        data => {
          this.getAllHolidays();
        },
        error => this.errorMessage = <any>error);
  }

  /*Запит на сервер для оновлення події*/
  updateHoliday(event) {
    let data = event.key;

    this.apiServiceService.updateHoliday(data)
      .subscribe(
        data => {
          this.getAllHolidays();
        },
        error => this.errorMessage = <any>error);
  }

  /*Запит на сервер для видалення обраної події*/
  deleteHoliday(event) {
    let data = event.data;

    this.apiServiceService.deleteHoliday(data.id)
      .subscribe(
        data => {
          this.getAllHolidays();
        },
        error => this.errorMessage = <any>error);
  }

}
