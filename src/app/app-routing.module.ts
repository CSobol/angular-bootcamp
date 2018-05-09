import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VideoDashboardComponent} from "./dashboard/video-dashboard/video-dashboard.component";
import {DashboardModule} from "./dashboard/dashboard.module";

const routes: Routes = [
  {path: '', redirectTo: 'video', pathMatch: 'full'},
  {path: 'video', loadChildren: './dashboard/dashboard.module#DashboardModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
