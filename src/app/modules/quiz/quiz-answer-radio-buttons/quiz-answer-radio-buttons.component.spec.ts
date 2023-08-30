import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizAnswerRadioButtonsComponent } from './quiz-answer-radio-buttons.component';

describe('QuizAnswerRadioButtonsComponent', () => {
  let component: QuizAnswerRadioButtonsComponent;
  let fixture: ComponentFixture<QuizAnswerRadioButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizAnswerRadioButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizAnswerRadioButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
