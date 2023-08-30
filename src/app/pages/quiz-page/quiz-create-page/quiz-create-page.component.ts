import {
  Category,
  Difficulty,
  Quiz,
  QuizResponse,
} from '../../../modules/quiz/quiz.model';
import { Component, OnInit } from '@angular/core';
import { QuizPageService } from '../quiz-page.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-quiz-create-page',
  templateUrl: './quiz-create-page.component.html',
  styleUrls: ['./quiz-create-page.component.scss'],
})
export class QuizCreatePageComponent implements OnInit {
  category?: Category;
  difficulty?: Difficulty;
  categories?: Observable<Category[]>;
  difficulties?: Difficulty[];

  constructor(public quizPageSvc: QuizPageService) {}

  ngOnInit(): void {
    this.category = this.quizPageSvc.getPreviousCategory();
    this.difficulty = this.quizPageSvc.getPreviousDifficulty();

    this.categories = this.quizPageSvc.getCategories();
    this.difficulties = this.quizPageSvc.getDifficulties();
  }

  createQuiz(quiz: Quiz) {
    this.quizPageSvc.createQuiz(quiz);
  }

  showResult(questions: QuizResponse[]) {
    this.quizPageSvc.showResult(questions);
  }
}
