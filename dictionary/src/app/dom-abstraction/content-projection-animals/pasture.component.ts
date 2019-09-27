import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pasture',
  template: `
    <div class="bg-green-light">
      <app-sheep></app-sheep>
      <app-sheep></app-sheep>
      <app-sheep></app-sheep>
    </div>
  `,
  styles: [`
    .bg-green-light {
      background-color: green;
    }
  `]
})
export class PastureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
