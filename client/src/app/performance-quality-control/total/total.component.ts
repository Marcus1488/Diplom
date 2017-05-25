import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {CourseTotalComponent} from "./course-total/course-total.component";

@Component({
  selector: 'app-total-performance',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss']
})
export class TotalPerformanceComponent implements OnInit {
  @ViewChildren(CourseTotalComponent) courseTotalComponents: QueryList<CourseTotalComponent>;

  constructor() { }

  ngOnInit() {
  }

  updateInfo() {
    this.courseTotalComponents.forEach((child) => {
      child.updateAllInfo();
    });
  }

}
