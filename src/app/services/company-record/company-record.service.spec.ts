import { TestBed } from '@angular/core/testing';

import { CompanyRecordService } from './company-record.service';

describe('CompanyRecordService', () => {
  let service: CompanyRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
