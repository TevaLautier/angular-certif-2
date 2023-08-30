import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Categories,
  Category,
  Difficulty,
  OpenTdbQuizResponse,
  Quiz,
  QuizQuestion,
} from './quiz.model';
import { Observable, map, mergeMap, throwError, toArray } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private url = 'https://opentdb.com';

  constructor(private http: HttpClient) {}

  public getCategories(): Observable<Category[]> {
    return this.http
      .get<Categories>(`${this.url}/api_category.php`)
      .pipe(map((categories) => categories.trivia_categories));
  }

  public getDifficulties(): Difficulty[] {
    return [Difficulty.EASY, Difficulty.MEDIUM, Difficulty.HARD];
  }

  public getQuestions(quiz: Quiz): Observable<QuizQuestion[]> {
    return this.http
      .get<OpenTdbQuizResponse>(
        `${this.url}/api.php?amount=5&category=${quiz.category.id}&difficulty=${quiz.difficulty}&type=multiple`
      )
      .pipe(
        map((response) => {
          // verify response code to see if there is error
          if (response.response_code !== 0) {
            throw Error('Error on opentdb');
          } else {
            // else return only the questions
            return response.results.map((question) => {
              // transform in a easy to use question with random answers
              return {
                correctAnswer: question.correct_answer,
                question: question.question,
                randomAnswers: this.shuffle([
                  question.correct_answer,
                  ...question.incorrect_answers,
                ]),
              };
            });
          }
        })
      );
  }

  private shuffle(array: string[]): string[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
