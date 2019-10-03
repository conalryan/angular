import { Component } from '@angular/core';
import { CalendarGridData } from '../calendar-grid-data';
import { calendarGridData } from '../calendar-grid-data.stub';

@Component({
  selector: 'app-ex-calendar-grid-row',
  template: `
    <h4>Calendar Row</h4>

    <app-calendar-grid-row [calendarGridRow]="calendarGridData.rows[0]">
      <app-calendar-grid-label>Row 1</app-calendar-grid-label>
      <app-calendar-grid-cell>Hi</app-calendar-grid-cell>
    </app-calendar-grid-row>

  `,
  styles: [`

  `]
})
export class ExCalendarGridRow {

  calendarGridData: CalendarGridData = calendarGridData();

  constructor() { }
}
