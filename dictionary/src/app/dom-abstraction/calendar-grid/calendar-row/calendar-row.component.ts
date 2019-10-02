import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-calendar-row',
  template: `
    <ng-content></ng-content>
  `,
  styles: [`
    // .calendar-grid-row:not(:last-child) {
    //   border-bottom: 1px solid #d2d2d2;
    // }
    :host:not(:last-child) {
      border-bottom: 1px solid #d2d2d2;
    }
  `]
})
export class CalendarRowComponent {

  @HostBinding('class.row') apply: boolean = true;

  constructor() { }
}
