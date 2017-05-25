import {Component, OnInit, ViewChild} from '@angular/core';
import {CourseComponent} from "./performance/course/course.component";
import {CourseForOmissionsComponent} from "./omissions/course-for-omissions/course-for-omissions.component";
import {CourseTotalComponent} from "./total/course-total/course-total.component";
import {TotalPerformanceComponent} from "./total/total.component";
import {OmissionsComponent} from "./omissions/omissions.component";
import {PerformanceComponent} from "./performance/performance.component";

@Component({
  selector: 'app-performance-quality-control',
  templateUrl: './performance-quality-control.component.html',
  styleUrls: ['./performance-quality-control.component.scss']
})
export class PerformanceQualityControlComponent implements OnInit {
  @ViewChild(TotalPerformanceComponent) totalPerformanceComponent: TotalPerformanceComponent;
  @ViewChild(OmissionsComponent) omissionsComponent: OmissionsComponent;
  @ViewChild(PerformanceComponent) performanceComponent: PerformanceComponent;

  constructor() { }

  ngOnInit() {
  }

  changeSelectedTab(e) {
    switch (e.index) {
      case 0:
        this.performanceComponent.updateInfo();
        break;
      case 1:
        this.omissionsComponent.updateInfo();
        break;
      case 2:
        this.totalPerformanceComponent.updateInfo();
        break;
    }
  }
}
