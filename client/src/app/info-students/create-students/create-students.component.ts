import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'app-create-students',
  templateUrl: './create-students.component.html',
  styleUrls: ['./create-students.component.scss']
})
export class CreateStudentsComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<CreateStudentsComponent>) { }

  ngOnInit() {
  }

}
