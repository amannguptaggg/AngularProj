import { TestBed } from '@angular/core/testing';

import { CustomPreloadStrategeyService } from './custom-preload-strategey.service';

describe('CustomPreloadStrategeyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomPreloadStrategeyService = TestBed.get(CustomPreloadStrategeyService);
    expect(service).toBeTruthy();
  });
});
