import { TestBed } from '@angular/core/testing';

import { StocksserviceService } from './stocksservice.service';

describe('StocksserviceService', () => {
  let service: StocksserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StocksserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
