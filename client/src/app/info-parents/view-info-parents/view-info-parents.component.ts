import {Component, Inject, OnInit} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from "@angular/material";
import {ApiServiceService} from "../../services/api-service.service";

@Component({
  selector: 'app-view-info-parents',
  templateUrl: './view-info-parents.component.html',
  styleUrls: ['./view-info-parents.component.scss']
})
export class ViewInfoParentsComponent implements OnInit {
  errorMessage: string;
  newData: any;

  constructor(public dialogRef: MdDialogRef<ViewInfoParentsComponent>,
              @Inject(MD_DIALOG_DATA) private data: any,
              public apiServiceService: ApiServiceService) {
    this.newData = JSON.parse(JSON.stringify(this.data));
  }

  ngOnInit() {
  }

  /*Запит на оновлення інформації про батьків*/
  updateParent() {
    this.apiServiceService.updateParent(this.newData.parent.id, this.newData.parent)
      .subscribe(
        data => {
          this.dialogRef.close();
        },
        error => this.errorMessage = <any>error);
  }
  }
