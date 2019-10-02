import { Component, HostBinding, Input } from '@angular/core';
import { CalendarGridCellData } from '../calendar-grid-data';

@Component({
  selector: 'app-row-data',
  template: `
    <div class="col d-flex pl-0">
      <div class="flex-grow-1 calendar-grid-cell">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [`
    .calendar-grid-cell {
      text-align: center;
      // https://stackoverflow.com/questions/25066214/flexbox-not-giving-equal-width-to-elements/25066844#25066844
      flex-basis: 0;
    }
  `]
})
export class RowDataComponent {

  @HostBinding('class.col') col: boolean = true;
  @HostBinding('class.d-flex') dFlex: boolean = true;
  @HostBinding('class.pl-0') pl: boolean = true;

  @Input() calendarGridCells: CalendarGridCellData[];

  constructor() { }
}
