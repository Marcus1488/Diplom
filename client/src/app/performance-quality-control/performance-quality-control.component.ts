import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-performance-quality-control',
  templateUrl: './performance-quality-control.component.html',
  styleUrls: ['./performance-quality-control.component.scss']
})
export class PerformanceQualityControlComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  changeSelectedTab(e) {
    switch (e.index) {
      case 0:
        break;
      case 1:
        break;
    }
  }
}
