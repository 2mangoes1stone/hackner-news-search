export interface HackerNewsArticles {
  hits: Hit[];
  nbPages: number;
  page: number;
}

export interface Hit {
  title:            string;
  url:              string;
}


