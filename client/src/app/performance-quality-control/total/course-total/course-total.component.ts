import {Component, Input, OnInit} from '@angular/core';
import {ApiServiceService} from "../../../services/api-service.service";

@Component({
  selector: 'app-course-total',
  templateUrl: './course-total.component.html',
  styleUrls: ['./course-total.component.scss']
})
export class CourseTotalComponent implements OnInit {
  @Input() courseNumber: number;

  errorMessage: any;
  firstSemesterItems: any;
  secondSemesterItems: any;
  performanceAllData: any = {
    firstSemester: [],
    secondSemester: []
  };

  constructor(private apiServiceService: ApiServiceService) {
  }

  ngOnInit() {
    this.getTotalPerformance(this.courseNumber);
  };

  getTotalPerformance(courseNumber) {
    this.apiServiceService.getAllPerformance(courseNumber, 1)
      .subscribe(
        data => {
          this.performanceAllData.firstSemester = data;
        },
        error => this.errorMessage = <any>error);
    this.apiServiceService.getAllPerformance(courseNumber, 2)
      .subscribe(
        data => {
          this.performanceAllData.secondSemester = data;
        },
        error => this.errorMessage = <any>error);
  };

}
