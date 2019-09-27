import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { HostElementComponent } from "./host-element/host-element.component";
import { TemplateRefComponent } from "./template-ref/template-ref.component";
import { ElementRefComponent } from "./element-ref/element-ref.component";
import { ViewContainerRefComponent } from "./view-container-ref/view-container-ref.component";
import { ViewRefComponent } from "./view-ref/view-ref.component";
import { ContentProjectionComponent } from "./content-projection/container/content-projection.component";
import { ViewChildComponent } from "./view-child/view-child.component";
import { ViewChildrenComponent } from "./view-children/container/view-children.component";
import { ContentChildrenComponent } from "./content-children/container/content-children.component";
import { ContentProjectionAnimalsComponent } from "./content-projection-animals/content-projection-animals.component";

const routes: Routes = [
  /* TODO: Make this a parent and child routes {
    path: 'dom-abstraction',
    pathMatch: 'full',
    redirectTo: 'view-child'
  },*/
  {
    path: "content-children",
    component: ContentChildrenComponent
  },
  {
    path: "content-projection",
    component: ContentProjectionComponent
  },
  {
    path: "content-projection-animals",
    component: ContentProjectionAnimalsComponent
  },
  {
    path: "element-ref",
    component: ElementRefComponent
  },
  {
    path: "host-element",
    component: HostElementComponent
  },
  {
    path: "template-ref",
    component: TemplateRefComponent
  },
  {
    path: "view-child",
    component: ViewChildComponent
  },
  {
    path: "view-children",
    component: ViewChildrenComponent
  },
  {
    path: "view-container-ref",
    component: ViewContainerRefComponent
  },
  {
    path: "view-ref",
    component: ViewRefComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DomAbstractionRoutingModule {}
