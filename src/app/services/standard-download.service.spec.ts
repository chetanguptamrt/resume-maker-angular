import { TestBed } from '@angular/core/testing';

import { StandardDownloadService } from './standard-download.service';

describe('StandardDownloadService', () => {
  let service: StandardDownloadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StandardDownloadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
