import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { CalendarGridData } from './calendar-grid-data';

@Component({
  selector: 'app-calendar-grid',
  template: `
    <h2>Calendar Grid</h2>
    <div *ngFor="let propName of propNames" class="row calendar-grid-row">
      <div class="col-2">{{ propName }}</div>

      <div class="col d-flex pl-0">

        <div *ngFor="let calendarCell of calendarGridData[propName]"
          class="flex-grow-1 calendar-grid-cell">
          {{ calendarCell.value }}
        </div>

      </div>
    </div>
  `,
  styles: [`
    .calendar-grid-row:not(:last-child) {
      border-bottom: 1px solid #d2d2d2;
    }

    .calendar-grid-cell {
      text-align: center;
      // https://stackoverflow.com/questions/25066214/flexbox-not-giving-equal-width-to-elements/25066844#25066844
      flex-basis: 0;
    }

    .weekend {
      background-color: #e8e8e8;
    }
  `]
})
export class CalendarGridComponent implements OnInit {

  @Input() calendarGridData: CalendarGridData = {
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

  // data
  propNames: string[] = [];

  constructor() { }

  // This should really be ngOnChanges, using ngOnInit since the component is router target.
  ngOnInit() {
    console.log('ngOnChanges');
    if (this.calendarGridData) {
      this.propNames = Object.getOwnPropertyNames(this.calendarGridData);
    }
  }
}
