import {
  HttpClient
} from '@angular/common/http';
import {
  Injectable
} from '@angular/core';
import {
  Observable
} from 'rxjs';

import { map } from "rxjs/operators";

export enum SearchType {
  all = '',
    movie = 'movie',
    series = 'series',
    episode = 'episode'
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url = 'http://www.omdbapi.com/'
  apiKey = '17e3e126';

  constructor(private http: HttpClient) {}

  searchData(title: string, type: SearchType): Observable < any > {
    return this.http.get('${this.url}?s=${encodeURI(title)}&type=${type}&apiKey=${this.apiKey}').pipe(
      map(results => results['Search'])
    );
  }

  getDetails() {

  }
}
