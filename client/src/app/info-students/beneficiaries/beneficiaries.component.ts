import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from "../../services/api-service.service";

@Component({
  selector: 'app-beneficiaries',
  templateUrl: './beneficiaries.component.html',
  styleUrls: ['./beneficiaries.component.scss']
})
export class BeneficiariesComponent implements OnInit {
  public students: any[];
  public errorMessage: any;

  constructor(private apiServiceService: ApiServiceService) {
    this.getBeneficiariesStudents();
  }

  ngOnInit() {
  }

  getBeneficiariesStudents() {
    this.apiServiceService.getBeneficiariesStudents()
      .subscribe(
        data => {
          this.students = data;
          this.students.map((student) => {
            student.fullName = student.lastName + ' ' + student.firstName + ' ' + student.secondName;
            student.fullAddress = student.addressStreet + ' ' + student.addressHouse + '/' + student.addressFlat;
          })
        },
        error => this.errorMessage = <any>error);
  }

}
