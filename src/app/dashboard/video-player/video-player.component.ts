import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck, share, switchMap, map } from 'rxjs/operators';
import {IVideo} from "../../types";
import { HttpClient } from '@angular/common/http';

const VIDEO_URL = 'https://api.angularbootcamp.com/videos/';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
  videoId: Observable<string>;
  videoDetails: Observable<any>;
  constructor(route: ActivatedRoute, http: HttpClient) {
    this.videoId = route.params.pipe(
      pluck<{}, string>('videoId')
    );

    this.videoDetails = route.params.pipe(
      pluck<{}, string>('videoId'),
      switchMap((id): Observable<any> => http.get(VIDEO_URL + id)),
    );
  }

  ngOnInit() {
  }
}
