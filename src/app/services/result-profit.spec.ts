import { TestBed } from '@angular/core/testing';

import { ResultProfitService } from './result-profit.service';

describe('ResultProfitService', () => {
  let service: ResultProfitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultProfitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
