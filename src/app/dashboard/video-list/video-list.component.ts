import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IVideo } from "../../types";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VideoLoaderSvc } from '../../videoLoader.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  videoList: Observable<IVideo[]>;
  constructor(private videoLoaderSvc: VideoLoaderSvc) {
    // http
    //   .get<IVideo[]>(this.VIDEO_URL + '/videos')
    //   .subscribe(videos => this.videoList = videos);
    this.videoList = this.videoLoaderSvc.loadVideos();
  }
  clicked: IVideo;
  selectedVideo(video: IVideo){
    this.clicked = video;
    this.clickedVideo.emit(video);
  }
  @Output() clickedVideo = new EventEmitter<IVideo>();
  ngOnInit() {
  }

}
