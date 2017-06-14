import {Component, Input, OnInit} from '@angular/core';
import {MdDialogRef} from "@angular/material";
import {ApiServiceService} from "../../services/api-service.service"
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-create-students',
  templateUrl: './create-students.component.html',
  styleUrls: ['./create-students.component.scss']
})
export class CreateStudentsComponent implements OnInit {
  infoForm = new FormControl();
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
    groupAsset: -1,
    motherId: null,
    fatherId: null,
    groupId: null
  };
  public mother: any = {
    firstName: '',
    lastName: '',
    secondName: '',
    phone: '',
    workAddress: ''
  };
  public father: any = {
    firstName: '',
    lastName: '',
    secondName: '',
    phone: '',
    addressWork: ''
  };
  public groupAssets: any[] = [
    {
      id: -1,
      name: 'Не входить до активу'
    },
    {
      id: 0,
      name: 'Староста'
    },
    {
      id: 1,
      name: 'Заст. Старости'
    },
    {
      id: 2,
      name: 'Профорг'
    },
    {
      id: 3,
      name: 'Академсектор'
    },
    {
      id: 4,
      name: 'Фізорг'
    },
    {
      id: 5,
      name: 'Культсектор'
    },
    {
      id: 6,
      name: 'Сектор праці'
    }
  ];
  public config: any;
  public typeView: any;

  constructor(public dialogRef: MdDialogRef<CreateStudentsComponent>,
              private apiServiceService: ApiServiceService) {
    if (this.dialogRef._containerInstance.dialogConfig && this.dialogRef._containerInstance.dialogConfig.data) {
      if (this.dialogRef._containerInstance.dialogConfig.data.typeView) {
        this.typeView = this.dialogRef._containerInstance.dialogConfig.data.typeView;
      }

      if (this.dialogRef._containerInstance.dialogConfig.data.student) {
        this.student = JSON.parse(JSON.stringify(this.dialogRef._containerInstance.dialogConfig.data.student));
        if (this.student.mother) {
          this.mother = this.student.mother;
        }
        if (this.student.father) {
          this.father = this.student.father;
        }
      }
    }
  }

  ngOnInit() {
  }

  createStudent() {
    this.apiServiceService.getConfig()
      .subscribe(
        data => {
          this.config = data;
          this.student.groupId = this.config.activeGroupId;

          if (this.mother.firstName && this.mother.lastName && this.mother.secondName
            && this.mother.phone && this.mother.addressWork) {
            this.student.mother = this.mother;
          } else {
            if (this.student.mother) {
              delete this.student.mother;
            }
          }

          if (this.father.firstName && this.father.lastName && this.father.secondName
            && this.father.phone && this.father.addressWork) {
            this.student.father = this.father;
          } else {
            if (this.student.father) {
              delete this.student.father;
            }
          }

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

  updateStudent() {
    if (this.mother.firstName && this.mother.lastName && this.mother.secondName
      && this.mother.phone && this.mother.addressWork) {
      this.student.mother = this.mother;
    } else {
      if (this.student.mother) {
        delete this.student.mother;
      }
    }

    if (this.father.firstName && this.father.lastName && this.father.secondName
      && this.father.phone && this.father.addressWork) {
      this.student.father = this.father;
    } else {
      if (this.student.father) {
        delete this.student.father;
      }
    }

    this.apiServiceService.updateStudent(this.student)
      .subscribe(
        data => {
          console.log('Student created');
          this.dialogRef.close(true);
        },
        error => this.errorMessage = <any>error);
  }

}
