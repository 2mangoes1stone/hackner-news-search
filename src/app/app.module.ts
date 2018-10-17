import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NewsSearchModule } from './modules/news-search/news-search.module';
import { HackerNewsApiService } from './services/hacker-news-api/hacker-news-api.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NewsSearchModule
  ],
  providers: [
    HackerNewsApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
