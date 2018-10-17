import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HackerNewsArticles } from './hacker-news-articles.model';

@Injectable()
export class HackerNewsApiService {
  keyword: string;
  baseUrl: string;

  constructor(
    private http: HttpClient
  ) { }

  public getArticles(keyword): Observable<HackerNewsArticles> {
    console.log('keyword', keyword);
    this.keyword = keyword;
    this.baseUrl = `${environment.hackerNewsApi}/search?query=${this.keyword}&tags=story`;

    return this.http.get<HackerNewsArticles>(this.baseUrl)
      .pipe(
        switchMap(response => of(response))
      );
  }

  public getMoreArticles(pageNumber): Observable<HackerNewsArticles> {
    return this.http.get<HackerNewsArticles>(`${this.baseUrl}&page=${pageNumber}`)
      .pipe(
        map(response => response)
      );
  }
}
