import { Component, OnInit } from '@angular/core';
import { QuizPageService } from '../quiz-page.service';
import { QuizResponse } from '../../../modules/quiz/quiz.model';

@Component({
  selector: 'app-quiz-result-page',
  templateUrl: './quiz-result-page.component.html',
  styleUrls: ['./quiz-result-page.component.scss'],
})
export class QuizResultPageComponent implements OnInit {
  responses?: QuizResponse[];

  constructor(private quizPageSvc: QuizPageService) {}

  ngOnInit(): void {
    this.responses = this.quizPageSvc.responses;
  }

  newQuiz(): void {
    this.quizPageSvc.newQuiz();
  }
}
