import { TestBed } from '@angular/core/testing';

import { NewstoryService } from './newstory.service';

describe('NewstoryService', () => {
  let service: NewstoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewstoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
