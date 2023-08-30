import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuizQuestion, QuizResponse } from '../quiz.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quiz-question-list',
  templateUrl: './quiz-question-list.component.html',
  styleUrls: ['./quiz-question-list.component.scss'],
})
export class QuizQuestionListComponent implements OnInit {
  @Input()
  questions?: QuizQuestion[];
  @Output()
  submit = new EventEmitter<QuizResponse[]>();

  constructor() {}

  ngOnInit(): void {}

  _submit(form: NgForm) {
    this.submit.emit(
      this.questions?.map((q) => {
        const userAnswer = form.controls[q.question].value;
        return { ...q, userAnswer };
      })
    );
  }
}
