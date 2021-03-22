import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaincontentComponent } from "../app/maincontent/maincontent.component";
const routes: Routes = [
  {
    path:'main' ,component:MaincontentComponent
  },
  {path:'' ,redirectTo:'main',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
