import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  Category,
  Difficulty,
  Quiz,
  QuizQuestion,
  QuizResponse,
} from '../../modules/quiz/quiz.model';
import { QuizService } from '../../modules/quiz/quiz.service';
import { Observable, catchError, of, tap, throwError } from 'rxjs';

const STORE_QUIZ = 'previousQuiz';

@Injectable({
  providedIn: 'root',
})
export class QuizPageService {
  questions?: QuizQuestion[];
  responses?: QuizResponse[];
  error?: Error;
  categories?: Category[];

  constructor(private quizSvc: QuizService, private router: Router) {}

  getDifficulties(): Difficulty[] {
    return this.quizSvc.getDifficulties();
  }

  getCategories(): Observable<Category[]> {
    return this.categories
      ? of(this.categories)
      : this.quizSvc.getCategories().pipe(
          tap((cats) => {
            // Caching categories for next quiz
            this.categories = cats;
          })
        );
  }

  createQuiz(quiz: Quiz) {
    this.error = undefined;
    localStorage.setItem(STORE_QUIZ, JSON.stringify(quiz));
    this.quizSvc
      .getQuestions(quiz)
      .pipe(
        catchError((error) => {
          this.error = error;
          return [];
        })
      )
      .subscribe((questions) => {
        this.questions = questions;
      });
  }

  getPreviousCategory(): Category | undefined {
    const previousQuiz = localStorage.getItem(STORE_QUIZ);
    return previousQuiz
      ? (JSON.parse(previousQuiz) as Quiz).category
      : undefined;
  }

  getPreviousDifficulty(): Difficulty | undefined {
    const previousQuiz = localStorage.getItem(STORE_QUIZ);
    return previousQuiz
      ? (JSON.parse(previousQuiz) as Quiz).difficulty
      : undefined;
  }

  showResult(responses: QuizResponse[]) {
    this.responses = responses;
    this.router.navigate(['/quiz/result']);
  }

  newQuiz() {
    //clear previous question
    this.questions = undefined;
    // route to another quiz
    this.router.navigate(['/quiz']);
  }
}
