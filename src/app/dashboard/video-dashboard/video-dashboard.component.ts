import { Component, OnInit } from '@angular/core';
import { IVideo } from '../../types'
@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent implements OnInit {
  currentVideo: IVideo;
  constructor() { }
  ngOnInit() {
  }

}
