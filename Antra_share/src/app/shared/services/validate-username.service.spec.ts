import { TestBed } from '@angular/core/testing';

import { ValidateUsernameService } from './validate-username.service';

describe('ValidateUsernameService', () => {
  let service: ValidateUsernameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidateUsernameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
