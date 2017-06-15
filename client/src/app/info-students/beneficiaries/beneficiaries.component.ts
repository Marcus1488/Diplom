import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ApiServiceService} from "../../services/api-service.service";
import {MdDialog} from "@angular/material";
import {CreateStudentsComponent} from "../create-students/create-students.component";
import {DeleteStudentComponent} from "../delete-student/delete-student.component";
import {GlobalService} from "../../services/global.service";

@Component({
  selector: 'app-beneficiaries',
  templateUrl: './beneficiaries.component.html',
  styleUrls: ['./beneficiaries.component.scss']
})
export class BeneficiariesComponent implements OnInit {
  token = JSON.parse(localStorage.getItem('token'));
  public students: any[];
  public errorMessage: any;

  constructor(private apiServiceService: ApiServiceService, public dialog: MdDialog, private globalSrv: GlobalService) {
    globalSrv.itemValue.subscribe((token) => {
      this.token = token;
    })
  }

  ngOnInit() {
  }

  /*Откримання інформації про студентів*/
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

  /*Відкриття модального вікна для редагування інформації про студента*/
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

  /*Відкриття модального вікна для видалення інформації про студента*/
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

  /*Відкриття модального вікна для перегляду інформації про студента*/
  openViewDialog(data) {
    this.dialog.open(CreateStudentsComponent, {
      data: {
        typeView: 'view',
        student: data
      }
    });
  }

}
