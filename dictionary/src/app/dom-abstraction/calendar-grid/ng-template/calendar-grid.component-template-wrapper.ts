import { Component } from '@angular/core';
import { CalendarGridData } from '../calendar-grid-data';

@Component({
  selector: 'app-calendar-grid-template-wrapper',
  template: `
    <h2>Calendar Grid Wrapper</h2>

    <app-calendar-grid-template
      [calendarGridData]="calendarGridData"
      [titleTemplate]="titleTemplate"
      [dataTemplate]="dataTemplate">
      <ng-template #titleTemplate let-p="propName">
        {{ p }}
      </ng-template>
      <ng-template #dataTemplate let-c="cellData">
        {{ c.value }}
      </ng-template>
    </app-calendar-grid-template>
  `,
  styles: [`

  `]
})
export class CalendarGridWrapperTemplateComponent {

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
