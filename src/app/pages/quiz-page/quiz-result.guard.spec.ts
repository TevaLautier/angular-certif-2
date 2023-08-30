import { TestBed } from '@angular/core/testing';

import { QuizResultGuard } from './quiz-result.guard';

describe('QuizResultGuard', () => {
  let guard: QuizResultGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(QuizResultGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
