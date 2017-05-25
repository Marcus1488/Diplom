import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {CourseComponent} from "./course/course.component";

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']
})
export class PerformanceComponent implements OnInit {
  @ViewChildren(CourseComponent) courseComponents: QueryList<CourseComponent>;

  constructor() {}

  ngOnInit() {
  }

  updateInfo() {
    this.courseComponents.forEach((child) => {
      child.updateAllInfo();
    });
  }

}
