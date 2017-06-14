import {Component, OnInit} from '@angular/core';
import {ApiServiceService} from "../services/api-service.service";
import {MdDialog} from "@angular/material";
import {ViewInfoParentsComponent} from "./view-info-parents/view-info-parents.component";
import {DeleteParentsComponent} from "./delete-parents/delete-parents.component";

@Component({
  selector: 'app-info-parents',
  templateUrl: './info-parents.component.html',
  styleUrls: ['./info-parents.component.scss']
})
export class InfoParentsComponent implements OnInit {
  public parents: any[];
  public errorMessage: any;

  constructor(public dialog: MdDialog, private apiServiceService: ApiServiceService) {
    this.getParents();
  }

  ngOnInit() {
  }

  getParents() {
    this.apiServiceService.getParents()
      .subscribe(
        data => {
          this.parents = data;
          this.parents.map((parent) => {
            parent.fullName = parent.lastName + ' ' + parent.firstName + ' ' + parent.secondName;
            parent.student.fullName = parent.student.lastName + ' ' + parent.student.firstName + ' ' + parent.student.secondName;
          })
        },
        error => this.errorMessage = <any>error);
  }

  openEditDialog(data) {
    let dialogRef = this.dialog.open(ViewInfoParentsComponent, {
      data: {
        typeView: 'edit',
        parent: data
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getParents();
    });
  }

  openDeletingDialog(data) {
    let dialogRef = this.dialog.open(DeleteParentsComponent, {
      data: {
        parent: data
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getParents();
    });
  }

  openViewDialog(data) {
    this.dialog.open(ViewInfoParentsComponent, {
      data: {
        typeView: 'view',
        parent: data
      }
    });
  }
}
