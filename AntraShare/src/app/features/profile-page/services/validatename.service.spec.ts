import { TestBed } from '@angular/core/testing';

import { ValidatenameService } from './validatename.service';

describe('ValidatenameService', () => {
  let service: ValidatenameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidatenameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
