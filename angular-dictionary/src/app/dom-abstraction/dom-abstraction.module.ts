import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { HostElementComponent } from "./host-element/host-element.component";
import { TemplateRefComponent } from "./template-ref/template-ref.component";
import { ElementRefComponent } from "./element-ref/element-ref.component";
import { ViewContainerRefComponent } from "./view-container-ref/view-container-ref.component";
import { ViewRefComponent } from "./view-ref/view-ref.component";
import { DomAbstractionRoutingModule } from "./dom-abstraction-routing.module";
import { CommonModule } from "@angular/common";
import { ExEntryComponent } from "./view-container-ref/entry-component/ex-entry.component";
import { ContentProjectionComponent } from "./content-projection/container/content-projection.component";
import { ChildComponent } from "./content-projection/components/child.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ViewChildComponent } from "./view-child/view-child.component";
import { ViewChildrenComponent } from "./view-children/container/view-children.component";
import { ContentChildrenComponent } from "./content-children/container/content-children.component";
import { ContentChildComponent } from "./content-children/components/content-child.component";
import { ChildWrapperComponent } from "./content-projection/components/child-wrapper.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    DomAbstractionRoutingModule
  ],
  declarations: [
    HostElementComponent,
    ElementRefComponent,
    TemplateRefComponent,
    ViewContainerRefComponent,
    ViewRefComponent,
    ExEntryComponent,
    ContentProjectionComponent,
    ChildComponent,
    ChildWrapperComponent,
    ViewChildComponent,
    ViewChildrenComponent,
    ChildComponent,
    ContentChildrenComponent,
    ContentChildComponent
  ],
  providers: [],
  entryComponents: [ExEntryComponent]
})
export class DomAbstractionModule {}
