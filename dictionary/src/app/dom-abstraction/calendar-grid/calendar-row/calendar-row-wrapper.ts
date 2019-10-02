import { Component } from '@angular/core';
import { CalendarGridData } from '../calendar-grid-data';

@Component({
  selector: 'app-calendar-row-wrapper',
  template: `
    <h4>Calendar Row</h4>

    <app-calendar-row>
      <app-row-title>Row 1</app-row-title>
      <app-row-data *ngFor="let calendarCell of calendarGridData['Row1']">{{calendarCell.value}}</app-row-data>
    </app-calendar-row>

  `,
  styles: [`

  `]
})
export class CalendarRowWrapper {

  // data
  calendarGridData: CalendarGridData = {
    'Row1': [
      {id: 'A', date: new Date(2019, 9, 1, 0, 0, 0, 0), value: '1'},
      {id: 'A', date: new Date(2019, 9, 2, 0, 0, 0, 0), value: '2'},
      {id: 'A', date: new Date(2019, 9, 3, 0, 0, 0, 0), value: '3'}
    ],
    'Row2': [
      {id: 'B', date: new Date(2019, 9, 1, 0, 0, 0, 0), value: '4'},
      {id: 'B', date: new Date(2019, 9, 2, 0, 0, 0, 0), value: '5'},
      {id: 'B', date: new Date(2019, 9, 3, 0, 0, 0, 0), value: '6'}
    ]
  };

  constructor() { }
}
