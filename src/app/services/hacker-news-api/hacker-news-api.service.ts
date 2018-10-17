import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HackerNewsArticles } from './hacker-news-articles.model';

@Injectable()
export class HackerNewsApiService {

  constructor(
    private http: HttpClient
  ) { }

  public getArticles(keyword): Observable<HackerNewsArticles> {
    console.log('keyword', keyword);
    const url = `${environment.hackerNewsApi}/search?query=${keyword}&tags=story`;
    return this.http.get<HackerNewsArticles>(url)
      .pipe(
        switchMap(result => {
          return of(result);
        })
      );
  }
}
