import { Component, Input, OnChanges, TemplateRef } from '@angular/core';
import { CalendarGridData } from './calendar-grid-data';

@Component({
  selector: 'app-calendar-grid-template',
  template: `
    <h4>Calendar Grid Template</h4>
    <div *ngFor="let propName of propNames" class="row calendar-grid-row">
      <div class="col-2">
      <ng-container *ngIf="!titleTemplate">
        {{ propName }}
      </ng-container>
      <ng-container *ngTemplateOutlet="titleTemplate;context:{propName:propName}"></ng-container>
      </div>

      <div class="col d-flex pl-0">

        <div *ngFor="let calendarCell of calendarGridData[propName]"
          class="flex-grow-1 calendar-grid-cell">
          <ng-container *ngIf="!dataTemplate">
            {{ calendarCell.value }}
          </ng-container>
          <ng-container *ngTemplateOutlet="dataTemplate;context:{cellData:calendarCell}"></ng-container>
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
export class CalendarGridTemplateComponent implements OnChanges {

  @Input() calendarGridData: CalendarGridData;
  @Input() titleTemplate: TemplateRef<any>;
  @Input() dataTemplate: TemplateRef<any>;

  propNames: string[] = [];

  constructor() { }

  ngOnChanges() {
    if (this.calendarGridData) {
      this.propNames = Object.getOwnPropertyNames(this.calendarGridData);
    }
  }
}
