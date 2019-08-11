import { TestBed } from '@angular/core/testing';

import { RecipebyNameService } from './recipeby-name.service';

describe('RecipebyNameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecipebyNameService = TestBed.get(RecipebyNameService);
    expect(service).toBeTruthy();
  });
});
