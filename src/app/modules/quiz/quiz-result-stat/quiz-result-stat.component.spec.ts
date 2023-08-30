import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizResultStatComponent } from './quiz-result-stat.component';

describe('QuizResultStatComponent', () => {
  let component: QuizResultStatComponent;
  let fixture: ComponentFixture<QuizResultStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizResultStatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizResultStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
