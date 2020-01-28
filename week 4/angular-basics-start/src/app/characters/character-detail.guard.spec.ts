import { TestBed, async, inject } from '@angular/core/testing';

import { CharacterDetailGuard } from './character-detail.guard';

describe('CharacterDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharacterDetailGuard]
    });
  });

  it('should ...', inject([CharacterDetailGuard], (guard: CharacterDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
