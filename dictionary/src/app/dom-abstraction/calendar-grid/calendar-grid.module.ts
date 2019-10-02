import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarGridComponent } from './calendar-grid.component';
import { CalendarCellComponent } from './calendar-cell.component';
import { CalendarGridWrapperTemplateComponent } from './calendar-grid.component-template-wrapper';
import { CalendarGridTemplateComponent } from './calendar-grid.component-template';

@NgModule({
  declarations: [
    CalendarGridComponent,
    CalendarCellComponent,
    CalendarGridWrapperTemplateComponent,
    CalendarGridTemplateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CalendarGridModule { }
