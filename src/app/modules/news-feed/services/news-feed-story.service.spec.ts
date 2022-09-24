import { TestBed } from '@angular/core/testing';

import { NewsFeedStoryService } from './news-feed-story.service';

describe('NewsFeedStoryService', () => {
  let service: NewsFeedStoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsFeedStoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
