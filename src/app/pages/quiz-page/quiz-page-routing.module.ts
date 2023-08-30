import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizResultPageComponent } from './quiz-result-page/quiz-result-page.component';
import { QuizCreatePageComponent } from './quiz-create-page/quiz-create-page.component';
import { QuizResultGuard } from './quiz-result.guard';

const routes: Routes = [
  { path: '', component: QuizCreatePageComponent },
  {
    path: 'result',
    component: QuizResultPageComponent,
    canActivate: [QuizResultGuard],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizPageRoutingModule {}
