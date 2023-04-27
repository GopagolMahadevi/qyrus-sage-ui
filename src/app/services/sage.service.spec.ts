import { TestBed } from '@angular/core/testing';

import { SageService } from './sage.service';

describe('SageService', () => {
  let service: SageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
