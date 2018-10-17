import { TestBed, inject } from '@angular/core/testing';

import { HackerNewsApiService } from './hacker-news-api.service';

describe('HackerNewsApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HackerNewsApiService]
    });
  });

  it('should be created', inject([HackerNewsApiService], (service: HackerNewsApiService) => {
    expect(service).toBeTruthy();
  }));
});
