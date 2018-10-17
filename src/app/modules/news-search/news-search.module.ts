import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsSearchComponent } from './news-search.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NewsSearchComponent
  ],
  exports: [
    NewsSearchComponent
  ]
})
export class NewsSearchModule { }
