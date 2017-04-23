import {Component, OnInit} from '@angular/core';
import {MdDialogRef} from "@angular/material";
import {ApiServiceService} from "../../../services/api-service.service";

@Component({
  selector: 'app-create-students',
  templateUrl: './create-students.component.html',
  styleUrls: ['./create-students.component.scss']
})
export class CreateStudentsComponent implements OnInit {
  public errorMessage: any;
  public student: any = {
    firstName: '',
    lastName: '',
    secondName: '',
    dateOfBirthday: null,
    birthPlace: '',
    passportSeries: '',
    passportNumber: '',
    passportDate: null,
    addressIndex: '',
    addressRegion: '',
    addressArea: '',
    addressCity: '',
    addressStreet: '',
    addressHouse: '',
    addressFlat: '',
    phone: '',
    studentTicket: '',
    beneficiaries: false,
    motherId: null,
    fatherId: null,
    groupId: null
  };
  public config: any;

  constructor(public dialogRef: MdDialogRef<CreateStudentsComponent>,
              private apiServiceService: ApiServiceService) {
  }

  ngOnInit() {
  }

  createStudent() {
    this.apiServiceService.getConfig()
      .subscribe(
        data => {
          this.config = data;
          this.student.groupId = this.config.activeGroupId;

          this.apiServiceService.createStudent(this.student)
            .subscribe(
              data => {
                console.log('Student created');
                this.dialogRef.close(true);
              },
              error => this.errorMessage = <any>error);
        },
        error => this.errorMessage = <any>error);

  }

}
