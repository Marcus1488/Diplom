import {Component, OnInit} from '@angular/core';
import {MdDialog} from "@angular/material";
import {CreateStudentsComponent} from "./create-students/create-students.component";
import {ApiServiceService} from "../../services/api-service.service";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  public students: any[];
  public errorMessage: any;

  constructor(public dialog: MdDialog, private apiServiceService: ApiServiceService) {
    this.getStudents();
  }

  ngOnInit() {
  }

  getStudents() {
    this.apiServiceService.getAllStudents()
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

  openCreateDialog() {
    let dialogRef = this.dialog.open(CreateStudentsComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getStudents();
      }
    });

  }

}
