export interface CalendarGridData {
  [key: string]: Array<CalendarGridCellData>;
}

export interface CalendarGridCellData {
  id: string;
  date: Date;
  value: any;
}
