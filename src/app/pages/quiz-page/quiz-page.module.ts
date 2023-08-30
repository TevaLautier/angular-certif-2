import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizPageRoutingModule } from './quiz-page-routing.module';
import { QuizCreatePageComponent } from './quiz-create-page/quiz-create-page.component';
import { QuizResultPageComponent } from './quiz-result-page/quiz-result-page.component';
import { QuizModule } from '../../modules/quiz/quiz.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [QuizCreatePageComponent, QuizResultPageComponent],
  imports: [CommonModule, QuizPageRoutingModule, QuizModule, RouterModule],
})
export class QuizPageModule {}
