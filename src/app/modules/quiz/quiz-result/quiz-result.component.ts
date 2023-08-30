import { Component, Input, OnInit } from '@angular/core';
import { QuizResponse } from '../quiz.model';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.scss'],
})
export class QuizResultComponent {
  @Input()
  responses?: QuizResponse[];

  constructor() {}
}
