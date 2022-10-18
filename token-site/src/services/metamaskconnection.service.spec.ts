import { TestBed } from '@angular/core/testing';

import { MetamaskconnectionService } from './metamaskconnection.service';

describe('MetamaskconnectionService', () => {
  let service: MetamaskconnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetamaskconnectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
