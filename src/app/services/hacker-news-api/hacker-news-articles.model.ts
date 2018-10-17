export interface HackerNewsArticles {
  hits: Hit[];
}

export interface Hit {
  created_at:       string;
  title:            string;
  url:              string;
  author:           string;
  points:           number;
  story_text:       null;
  comment_text:     null;
  num_comments:     number;
  story_id:         null;
  story_title:      null;
  story_url:        null;
  parent_id:        null;
  created_at_i:     number;
  _tags:            string[];
  objectID:         string;
  _highlightResult: HighlightResult;
}

export interface HighlightResult {
  title:  Author;
  url:    Author;
  author: Author;
}

export interface Author {
  value:             string;
  matchLevel:        string;
  matchedWords:      string[];
  fullyHighlighted?: boolean;
}


