import { Component, OnInit, Input } from '@angular/core';
import { IVideo } from '../../types';
@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
  @Input('clickedVideo') video: IVideo;
  constructor() { }
  ngOnInit() {
  }
}
