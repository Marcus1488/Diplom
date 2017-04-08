import {Component, OnInit} from '@angular/core';
import {MdDialog} from "@angular/material";
import {CreateStudentsComponent} from "./create-students/create-students.component";

@Component({
  selector: 'app-info-students',
  templateUrl: './info-students.component.html',
  styleUrls: ['./info-students.component.scss']
})
export class InfoStudentsComponent implements OnInit {
  public customers: any[] = [
    {
    "Студ білет": "123456",
    "Паспортні дані": "Super Mart of the West",
    "Свідоцтво": "702 SW 8th Street",
    "Копія приписного": "Bentonville"
  }, {
    "Студ білет": "123456",
    "Паспортні дані": "Super Mart of the West",
    "Свідоцтво": "702 SW 8th Street",
    "Копія приписного": "Bentonville"
  }, {
    "Студ білет": "123456",
    "Паспортні дані": "Super Mart of the West",
    "Свідоцтво": "702 SW 8th Street",
    "Копія приписного": "Bentonville"
  }, {
    "Студ білет": "123456",
    "Паспортні дані": "Super Mart of the West",
    "Свідоцтво": "702 SW 8th Street",
    "Копія приписного": "Bentonville"
  }, {
    "Студ білет": "123456",
    "Паспортні дані": "Super Mart of the West",
    "Свідоцтво": "702 SW 8th Street",
    "Копія приписного": "Bentonville"
  }, {
    "Студ білет": "123456",
    "Паспортні дані": "Super Mart of the West",
    "Свідоцтво": "702 SW 8th Street",
    "Копія приписного": "Bentonville"
  }, {
    "Студ білет": "123456",
    "Паспортні дані": "Super Mart of the West",
    "Свідоцтво": "702 SW 8th Street",
    "Копія приписного": "Bentonville"
  }, {
    "Студ білет": "123456",
    "Паспортні дані": "Super Mart of the West",
    "Свідоцтво": "702 SW 8th Street",
    "Копія приписного": "Bentonville"
  }, {
    "Студ білет": "123456",
    "Паспортні дані": "Super Mart of the West",
    "Свідоцтво": "702 SW 8th Street",
    "Копія приписного": "Bentonville"
  }, {
    "Студ білет": "123456",
    "Паспортні дані": "Super Mart of the West",
    "Свідоцтво": "702 SW 8th Street",
    "Копія приписного": "Bentonville"
  }, {
    "Студ білет": 14135123,
    "Паспортні дані": "Super Mart of the West",
    "Свідоцтво": "702 SW 8th Street",
    "Копія приписного": "Bentonville"
  }, {
    "Студ білет": "123456",
    "Паспортні дані": "Super Mart of the West",
    "Свідоцтво": "702 SW 8th Street",
    "Копія приписного": "Bentonville"
  }];

  constructor(public dialog: MdDialog) {}

  ngOnInit() {
  }

  openCreateDialog() {
    this.dialog.open(CreateStudentsComponent);
}

}
