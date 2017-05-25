import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {CourseForOmissionsComponent} from "./course-for-omissions/course-for-omissions.component";

@Component({
  selector: 'app-omissions',
  templateUrl: './omissions.component.html',
  styleUrls: ['./omissions.component.scss']
})
export class OmissionsComponent implements OnInit {
  @ViewChildren(CourseForOmissionsComponent) courseForOmissionsComponents: QueryList<CourseForOmissionsComponent>;

  constructor() { }

  ngOnInit() {
  }

  updateInfo() {
    this.courseForOmissionsComponents.forEach((child) => {
      child.updateAllInfo();
    });
  }

}
