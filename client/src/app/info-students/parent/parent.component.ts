import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from "../../services/api-service.service";
import {CreateStudentsComponent} from "app/info-students/create-students/create-students.component";
import {DeleteStudentComponent} from "../delete-student/delete-student.component";
import {MdDialog} from "@angular/material";
import {GlobalService} from "../../services/global.service";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  token = JSON.parse(localStorage.getItem('token'));
  students: any;
  errorMessage: any;

  constructor(public apiServiceService: ApiServiceService, public dialog: MdDialog, private globalSrv: GlobalService) {
    globalSrv.itemValue.subscribe((token) => {
      this.token = token;
    })
  }

  ngOnInit() {
  }

  /*Откримання інформації про студентів*/
  getIncompleteFamilies() {
    this.apiServiceService.getIncompleteFamilies()
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
        this.getIncompleteFamilies();
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
        this.getIncompleteFamilies();
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
