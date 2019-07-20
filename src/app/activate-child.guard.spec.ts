import { TestBed, async, inject } from '@angular/core/testing';

import { ActivateChildGuard } from './activate-child.guard';

describe('ActivateChildGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActivateChildGuard]
    });
  });

  it('should ...', inject([ActivateChildGuard], (guard: ActivateChildGuard) => {
    expect(guard).toBeTruthy();
  }));
});
