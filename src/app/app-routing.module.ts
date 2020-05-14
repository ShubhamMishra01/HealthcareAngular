import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcenterComponent } from './addcenter/addcenter.component';
import { RemovecenterComponent } from './removecenter/removecenter.component';
import { ViewcenterComponent } from './viewcenter/viewcenter.component';


const routes: Routes = [{path:"addcenter", component:AddcenterComponent},{path:"removecenter", component:RemovecenterComponent},{path:"viewcenter", component:ViewcenterComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
