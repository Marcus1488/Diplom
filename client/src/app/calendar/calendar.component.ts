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
  holydays: any = [[1,0], [4,6], [25,11]];

  getCellCssClass(date) {
    var dayNumber = date.getDay(),
      cssClass = "";

    if(dayNumber === 0 || dayNumber === 6)
      cssClass = "weekend";

    $.each(this.holydays, function(_, item) {
      if(date.getDate() === item[0] && date.getMonth() === item[1]) {
        cssClass = "holyday";
        return false;
      }
    });

    return cssClass;
  }


  constructor() { }

  ngOnInit() {
  }

}
