import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IVideo } from "./types";
import { Observable, from, of } from 'rxjs';
import { concatMap, delay, map, scan } from 'rxjs/operators';

const VIDEO_URL: string = 'https://api.angularbootcamp.com/videos';


@Injectable({
  providedIn: 'root'
})
export class VideoLoaderSvc {
  private alternate(s: string) {
    let chars = s.toLowerCase().split("");
    for (let i = 0; i < chars.length; i += 2) {
      chars[i] = chars[i].toUpperCase();
    }
    return chars.join("");
  }

  constructor(private http: HttpClient) {
  }

  loadVideos(): Observable<IVideo[]> {
    return this.http
      .get<IVideo[]>(VIDEO_URL)
      .pipe(map(list => {
        return list.map(video => {
          video.title = this.alternate(video.title);
          return video;
        });
      }))
  }

  getIncrementalVideoList(): Observable<IVideo[]> {
    return this.http.get<IVideo[]>(VIDEO_URL).pipe(
      concatMap(list => from(list)),
      concatMap(video => of(video).pipe(delay(500))),
      map(video => [video]),
      scan((acc, curr) => [...acc, ...curr]),
    );
  }
}
