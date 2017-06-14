import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from "../../services/api-service.service";
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'app-edit-default-info',
  templateUrl: './edit-default-info.component.html',
  styleUrls: ['./edit-default-info.component.scss']
})
export class EditDefaultInfoComponent implements OnInit {
  errorMessage: string;
  config: any = {
    department: '',
    speciality: '',
    discipline: '',
    teacher: '',
    activeGroupId: null
  };
  groupName: string;
  groups: any;

  constructor(private dialogRef: MdDialogRef<EditDefaultInfoComponent>,
              private apiServiceService: ApiServiceService) {
    this.getConfig();
    this.getGroups();
  }

  ngOnInit() {
  }

  getConfig() {
    this.apiServiceService.getConfig()
      .subscribe(
        data => {
          this.config = data;
        },
        error => this.errorMessage = <any>error);
  }

  getGroups() {
    this.apiServiceService.getGroups()
      .subscribe(
        data => {
          this.groups = data;
        },
        error => this.errorMessage = <any>error);
  }

  createGroup() {
    this.apiServiceService.createGroup(this.groupName)
      .subscribe(
        data => {
          this.groupName = '';
          this.getGroups();
          console.log(data);
        },
        error => this.errorMessage = <any>error);
  }

  updateConfig() {
    this.apiServiceService.updateConfig(this.config)
      .subscribe(
        data => {
          this.dialogRef.close();
        },
        error => this.errorMessage = <any>error);
  }

}
