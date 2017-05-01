import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ApiServiceService} from "../../services/api-service.service";
import {MdDialog} from "@angular/material";
import {CreateStudentsComponent} from "../create-students/create-students.component";
import {DeleteStudentComponent} from "../delete-student/delete-student.component";

@Component({
  selector: 'app-beneficiaries',
  templateUrl: './beneficiaries.component.html',
  styleUrls: ['./beneficiaries.component.scss']
})
export class BeneficiariesComponent implements OnInit {
  public students: any[];
  public errorMessage: any;

  constructor(private apiServiceService: ApiServiceService, public dialog: MdDialog) {
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

  openEditDialog(data) {
    let dialogRef = this.dialog.open(CreateStudentsComponent, {
      data: {
        typeView: 'edit',
        student: data
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getBeneficiariesStudents();
      }
    });
  }

  openDeletingDialog(data) {
    let dialogRef = this.dialog.open(DeleteStudentComponent, {
      data: {
        student: data
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getBeneficiariesStudents();
      }
    });
  }

  openViewDialog(data) {
    this.dialog.open(CreateStudentsComponent, {
      data: {
        typeView: 'view',
        student: data
      }
    });
  }

}
