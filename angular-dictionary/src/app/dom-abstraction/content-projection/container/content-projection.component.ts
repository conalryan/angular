import { Component, OnInit } from "@angular/core";

/**
 * Content projection is a way to import HTML content from outside the component and insert that content into the
 * component's template in a designated spot.
 * AngularJS developers know this technique as transclusion.
 */
@Component({
  selector: "app-content-projection",
  template: `
    <p>
      content-projection works!
    </p>

    <app-child-wrapper>
      <app-child></app-child>
    </app-child-wrapper>
  `
})
export class ContentProjectionComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
