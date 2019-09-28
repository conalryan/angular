import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-projection-animals-target',
  template: `
    <div class="border bg-white">
      <app-pasture-target>
        <app-sheep></app-sheep>
        <app-sheep></app-sheep>
        <h1>I'm not a sheep</h1>
      </app-pasture-target>
    </div>
  `,
  styles: [`
    .bg-white {
      background-color: white;
    }
  `]
})
export class ContentProjectionAnimalsTargetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
