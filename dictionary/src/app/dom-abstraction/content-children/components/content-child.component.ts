import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnInit,
  ViewChild
} from "@angular/core";

@Component({
  selector: "app-content-child",
  template: `
    <h1>Content Child</h1>
    <ng-content></ng-content>
  `
})
export class ContentChildComponent
  implements OnInit, AfterContentInit, AfterViewInit {
  @ViewChild("h1")
  h1: ElementRef;
  @ContentChild("tplRefInsideNgContent")
  tplRef: ElementRef;

  constructor() {
    console.log("[Child] constructor() { h1, tplRef } ");
    console.log(this.h1); // undefined
    console.log(this.tplRef); // undefined
  }

  ngOnInit() {
    console.log("[Child] ngOnInit() { h1, tplRef } ");
    console.log(this.h1); // undefined
    console.log(this.tplRef);
  }

  ngAfterContentInit() {
    console.log("[Child] ngAfterContentInit() { h1, tplRef } ");
    console.log(this.h1); // undefined
    console.log(this.tplRef);
  }

  ngAfterViewInit() {
    console.log("[Child] ngAfterViewInit() { h1, tplRef } ");
    console.log(this.h1); // undefined
    console.log(this.tplRef);
  }
}
