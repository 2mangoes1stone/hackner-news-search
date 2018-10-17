import { Component, OnInit } from '@angular/core';
import { HackerNewsApiService } from 'src/app/services/hacker-news-api/hacker-news-api.service';
import { Hit, HackerNewsArticles } from 'src/app/services/hacker-news-api/hacker-news-articles.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-news-search',
  templateUrl: './news-search.component.html',
  styleUrls: ['./news-search.component.scss']
})
export class NewsSearchComponent implements OnInit {
  articles: Hit[];
  keyword = '';
  subscription: Subscription;
  nmPages: number;

  constructor(
    private hackerNewsApiService: HackerNewsApiService
  ) { }

  ngOnInit() {
  }

  public getArticles(event) {
    this.keyword = event.target.value;


    this.hackerNewsApiService.getArticles(this.keyword)
      .subscribe(response => {
        this.articles = response.hits.filter(article => {
          return this.keyword ? article.title && article.url : null;
        });
        console.log('articles', this.articles);
      });
  }

}
