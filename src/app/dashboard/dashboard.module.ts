import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoDashboardComponent } from './video-dashboard/video-dashboard.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { StatFiltersComponent } from './stat-filters/stat-filters.component';
import {RouterModule, Routes} from "@angular/router";
import {VideoItemComponent} from "./video-list/video-item/video-item.component";
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '', component: VideoDashboardComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [VideoDashboardComponent, VideoListComponent, VideoPlayerComponent, VideoItemComponent, StatFiltersComponent]
})
export class DashboardModule { }
