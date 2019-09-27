import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-projection-animals',
  template: `
    <div class="border bg-white">
      <app-pasture></app-pasture>
    </div>
  `,
  styles: [`
    .bg-white {
      background-color: white;
    }
  `]
})
export class ContentProjectionAnimalsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
