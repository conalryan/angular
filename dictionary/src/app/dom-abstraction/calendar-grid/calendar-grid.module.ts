import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarGridComponent } from './calendar-grid.component';
import { CalendarCellComponent } from './calendar-cell.component';
import { CalendarGridWrapperTemplateComponent } from './ng-template/calendar-grid.component-template-wrapper';
import { CalendarGridTemplateComponent } from './ng-template/calendar-grid.component-template';
import { CalendarRowComponent } from './calendar-row/calendar-row.component';
import { CalendarRowWrapper } from './calendar-row/calendar-row-wrapper';
import { RowTitleComponent } from './calendar-row/row-title.component';
import { RowDataComponent } from './calendar-row/row-data.component';

@NgModule({
  declarations: [
    CalendarGridComponent,
    CalendarCellComponent,
    CalendarGridWrapperTemplateComponent,
    CalendarGridTemplateComponent,
    CalendarRowComponent,
    CalendarRowWrapper,
    RowTitleComponent,
    RowDataComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CalendarGridModule { }
