import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private openedMenu = true;
  private openedCalendar = true;

  constructor() {

  }

  toggleMenu() {
    this.openedMenu = !this.openedMenu;
  }

  toggleCalendar() {
    this.openedCalendar = !this.openedCalendar;
  }
}
