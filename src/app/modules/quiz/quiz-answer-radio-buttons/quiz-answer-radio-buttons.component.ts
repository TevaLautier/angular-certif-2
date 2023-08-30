import { Component, Input, forwardRef, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => QuizAnswerRadioButtonsComponent),
  multi: true,
};

@Component({
  providers: [VALUE_ACCESSOR],
  selector: 'app-quiz-answer-radio-buttons',
  templateUrl: './quiz-answer-radio-buttons.component.html',
  styleUrls: ['./quiz-answer-radio-buttons.component.scss'],
})
export class QuizAnswerRadioButtonsComponent implements ControlValueAccessor {
  @Input() answers: string[] = [];

  selected?: string;
  disabled = false;

  onChange = (value: string | undefined) => {};
  onTouched = () => {};

  constructor() {}

  selectAnswer(answer: string): void {
    this.selected = answer;
    this.onChange(this.selected);
    this.onTouched();
  }

  writeValue(answer: string): void {
    this.selected = answer;
  }

  registerOnChange(fn: (value: string | undefined) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
