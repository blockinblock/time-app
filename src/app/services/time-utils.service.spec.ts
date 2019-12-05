import { TestBed } from '@angular/core/testing';

import { TimeUtilsService } from './time-utils.service';

describe('TimeUtilsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimeUtilsService = TestBed.get(TimeUtilsService);
    expect(service).toBeTruthy();
  });
});
