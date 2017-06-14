import {Component, OnInit} from '@angular/core';
import {HolidaysComponent} from "./holidays/holidays.component";
import {MdDialog} from "@angular/material";
import {ApiServiceService} from "../services/api-service.service";
import {EditDefaultInfoComponent} from "./edit-default-info/edit-default-info.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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

  constructor(public dialog: MdDialog, private apiServiceService: ApiServiceService) {
  }

  ngOnInit() {
    this.getConfig();
    this.getHolidaysByDate();
    /*let token = JSON.parse(localStorage.getItem('token'));
    console.log(token);*/
  }

  getHolidaysByDate() {
    this.apiServiceService.getHolidaysByDate(this.currentValue)
      .subscribe(
        data => {
          this.holidays = data;
        },
        error => this.errorMessage = <any>error);
  }

  openHolidays() {
    this.dialog.open(HolidaysComponent);
  }

  editDefaultInfo() {
    let dialogRef = this.dialog.open(EditDefaultInfoComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.getConfig();
    });
  }

  getConfig() {
    this.apiServiceService.getConfig()
      .subscribe(
        data => {
          this.config = data;
        },
        error => this.errorMessage = <any>error);
  }
}
