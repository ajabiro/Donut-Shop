import { TestBed } from '@angular/core/testing';

import { DonutssService } from './donutss.service';

describe('DonutssService', () => {
  let service: DonutssService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonutssService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
