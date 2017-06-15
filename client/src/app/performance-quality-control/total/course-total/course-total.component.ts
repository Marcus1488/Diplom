import {Component, Input, OnInit, Pipe, PipeTransform} from '@angular/core';
import {ApiServiceService} from "../../../services/api-service.service";

@Pipe({name: 'keysTotal'})
export class KeysTotalPipe implements PipeTransform {
  transform(value, args: string[]): any {
    let keys = [];
    for (let key in value[0]) {
      if (this.checkKeys(key)) {
        keys.push({key: key, value: value[0][key]});
      }
    }
    return keys;
  }

  checkKeys(key) {
    return key !== 'student' && key !== 'averageScore' && key !== 'omission'
  }
}

@Component({
  selector: 'app-course-total',
  templateUrl: './course-total.component.html',
  styleUrls: ['./course-total.component.scss']
})
export class CourseTotalComponent implements OnInit {
  @Input() courseNumber: number;

  errorMessage: any;
  performanceAllData: any = {
    firstSemester: [],
    secondSemester: []
  };

  constructor(private apiServiceService: ApiServiceService) {
  }

  ngOnInit() {
  };

  /*оновлення інформації при переході на вкладку*/
  updateAllInfo() {
    this.getTotalPerformance(this.courseNumber);
  }

  /*Отримання інформації для звіту*/
  getTotalPerformance(courseNumber) {
    this.apiServiceService.getTotalPerformance(courseNumber, 1)
      .subscribe(
        data => {
          this.performanceAllData.firstSemester = data;
        },
        error => this.errorMessage = <any>error);
    this.apiServiceService.getTotalPerformance(courseNumber, 2)
      .subscribe(
        data => {
          this.performanceAllData.secondSemester = data;
        },
        error => this.errorMessage = <any>error);
  };

  /*Кастомізація тексту*/
  customizeText(data) {
    return data.value;
  }

}
