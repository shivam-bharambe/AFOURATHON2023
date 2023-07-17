import { TestBed } from '@angular/core/testing';

import { CabsService } from './cabs.service';

describe('CabsService', () => {
  let service: CabsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CabsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
