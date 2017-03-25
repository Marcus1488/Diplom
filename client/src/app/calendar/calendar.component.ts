import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  currentValue: Date = new Date();
  minDateValue: Date = undefined;
  maxDateValue: Date = undefined;
  zoomLevels: string[] = [
    "month", "year", "decade", "century"
  ];
  cellTemplate = "cell";

  constructor() { }

  showEvents() {
    console.log(this.currentValue)
  }

  ngOnInit() {
  }

}
