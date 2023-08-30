import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizCreatePageComponent } from './quiz-create-page.component';

describe('QuizCreatePageComponent', () => {
  let component: QuizCreatePageComponent;
  let fixture: ComponentFixture<QuizCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizCreatePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
