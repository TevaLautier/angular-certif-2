import { Observable } from 'rxjs';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category, Difficulty, Quiz } from '../quiz.model';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz-selector',
  templateUrl: './quiz-selector.component.html',
  styleUrls: ['./quiz-selector.component.scss'],
})
export class QuizSelectorComponent implements OnInit {
  @Output() create = new EventEmitter<Quiz>();
  @Input()
  category?: Category;
  @Input()
  difficulty?: Difficulty;

  categories?: Observable<Category[]>;
  difficulties?: Difficulty[];

  compareCategory = (a: Category, b: Category) => a?.id === b?.id;

  constructor(private quizSvc: QuizService) {}

  ngOnInit(): void {
    this.categories = this.quizSvc.getCategories();
    this.difficulties = this.quizSvc.getDifficulties();
  }

  submit(form: NgForm) {
    const { category, difficulty } = form.value;
    this.create.emit({
      category,
      difficulty,
    });
  }
}
