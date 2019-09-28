import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-projection-animals-explicit',
  template: `
    <div class="border bg-white">
      <app-pasture>
        <app-sheep></app-sheep>
        <app-sheep></app-sheep>
        <app-sheep></app-sheep>
      </app-pasture>
    </div>
  `,
  styles: [`
    .bg-white {
      background-color: white;
    }
  `]
})
export class ContentProjectionAnimalsExplicitComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
