import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizResultPageComponent } from './quiz-result-page/quiz-result-page.component';
import { QuizCreatePageComponent } from './quiz-create-page/quiz-create-page.component';

const routes: Routes = [
  { path: '', component: QuizCreatePageComponent },
  { path: 'result', component: QuizResultPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizPageRoutingModule {}
