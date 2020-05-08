import { TestBed } from '@angular/core/testing';

import { PosterGuard } from './poster.guard';

describe('PosterGuard', () => {
  let guard: PosterGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PosterGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
