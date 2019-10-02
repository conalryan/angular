import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-row-title',
  template: `
    <ng-content></ng-content>
  `,
  styles: [`
  `]
})
export class RowTitleComponent {

  @HostBinding('class.col-2') apply: boolean = true;

  constructor() { }
}
