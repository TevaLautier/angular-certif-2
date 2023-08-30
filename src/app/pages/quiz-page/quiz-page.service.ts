import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Category, Difficulty, Quiz, QuizQuestion, QuizResponse } from '../../modules/quiz/quiz.model';
import { QuizService } from '../../modules/quiz/quiz.service';

const STORE_QUIZ = 'previousQuiz';

@Injectable({
  providedIn: 'root',
})
export class QuizPageService {

  questions?: QuizQuestion[];
  responses?: QuizResponse[];

  constructor(private quizSvc: QuizService,private router:Router) {}

  createQuiz(quiz: Quiz) {
    localStorage.setItem(STORE_QUIZ, JSON.stringify(quiz));
    this.quizSvc.getQuestions(quiz).subscribe((questions) => {
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

  showResult(responses:QuizResponse[]) {
    this.responses=responses;
    this.router.navigate(["/quiz/result"]);
  }
}
