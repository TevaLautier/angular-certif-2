import { Component, Input, OnInit } from '@angular/core';
import { QuizResponse } from '../quiz.model';

@Component({
  selector: 'app-quiz-result-stat',
  templateUrl: './quiz-result-stat.component.html',
  styleUrls: ['./quiz-result-stat.component.scss']
})
export class QuizResultStatComponent implements OnInit {
  @Input()
  responses?: QuizResponse[];
  nbCorrect=0;

  constructor() { }

  ngOnInit(): void {
    this.responses?.forEach(r=>{
      if(r.userAnswer===r.correctAnswer){
        this.nbCorrect++;
      }
    })
  }

}
