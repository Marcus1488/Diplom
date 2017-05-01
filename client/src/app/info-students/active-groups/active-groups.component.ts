import { Component, OnInit } from '@angular/core';
import {MdDialog} from "@angular/material";
import {ApiServiceService} from "../../services/api-service.service";
import {CreateStudentsComponent} from "../create-students/create-students.component";
import {DeleteStudentComponent} from "../delete-student/delete-student.component";

@Component({
  selector: 'app-active-groups',
  templateUrl: './active-groups.component.html',
  styleUrls: ['./active-groups.component.scss']
})
export class ActiveGroupsComponent implements OnInit {
  public students: any[];
  public errorMessage: any;
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

  constructor(private apiServiceService: ApiServiceService, public dialog: MdDialog) {
  }

  ngOnInit() {
  }

  getNameAssetsById(id) {
    let name = this.groupAssets.find(groupAsset => groupAsset.id == id).name;
    return name;
  }

  getGroupAssets() {
    this.apiServiceService.getGroupAssets()
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
        this.getGroupAssets();
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
        this.getGroupAssets();
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
