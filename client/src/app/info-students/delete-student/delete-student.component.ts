import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from "../../services/api-service.service";
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.scss']
})
export class DeleteStudentComponent implements OnInit {
  errorMessage: any;
  student: any;

  constructor(public dialogRef: MdDialogRef<DeleteStudentComponent>,
              private apiServiceService: ApiServiceService) {
    this.student = this.dialogRef._containerInstance.dialogConfig.data.student;
  }

  ngOnInit() {
  }

  /*Запит на видалення інформації про обраного студента*/
  deleteStudent() {
    this.apiServiceService.deleteStudent(this.student)
      .subscribe(
        data => {
          console.log('Student deleted');
          this.dialogRef.close(true);
        },
        error => this.errorMessage = <any>error);
  }

}
