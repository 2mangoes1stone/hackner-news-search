import { Component, OnInit } from '@angular/core';
import { HackerNewsApiService } from 'src/app/services/hacker-news-api/hacker-news-api.service';
import { Hit } from 'src/app/services/hacker-news-api/hacker-news-articles.model';
import { Subscription } from 'rxjs';
import { easeInOutAnimation } from 'src/app/animations/ease-in-out.animation';

@Component({
  selector: 'app-news-search',
  templateUrl: './news-search.component.html',
  styleUrls: ['./news-search.component.scss'],
  animations: [ easeInOutAnimation ]
})
export class NewsSearchComponent implements OnInit {
  articles: Hit[] = [];
  keyword = '';
  subscription: Subscription;
  nbPages: number;
  page: number;
  loading = false;

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
          this.nbPages = response.nbPages;
          this.page = response.page;
          return this.keyword ? article.title && article.url : null;
        });
      });
  }


  public getMoreArticles() {
    this.loading = true;
    this.nbPages -= 1;

    if (this.nbPages > 0) {
      this.hackerNewsApiService.getMoreArticles(this.page += 1)
        .subscribe(response => {
          response.hits.map(article => this.articles.push(article));
          this.loading = false;
        });
    }
  }

  public showButton(): boolean {
    return !!(this.articles.length > 0 && !this.loading && this.nbPages > 1);
  }

}
