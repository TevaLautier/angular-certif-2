import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { QuizSelectorComponent } from './quiz-selector/quiz-selector.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuizQuestionListComponent } from './quiz-question-list/quiz-question-list.component';
import { QuizAnswerRadioButtonsComponent } from './quiz-answer-radio-buttons/quiz-answer-radio-buttons.component';
import { QuizResultComponent } from './quiz-result/quiz-result.component';
import { QuizResultStatComponent } from './quiz-result-stat/quiz-result-stat.component';

@NgModule({
  declarations: [QuizSelectorComponent, QuizQuestionListComponent, QuizAnswerRadioButtonsComponent, QuizResultComponent, QuizResultStatComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [QuizSelectorComponent, QuizQuestionListComponent, QuizResultComponent, QuizResultStatComponent],
})
export class QuizModule {}
