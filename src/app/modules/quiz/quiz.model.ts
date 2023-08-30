export class Category {
  id!: number;
  name!: string;
}

export class Categories {
  trivia_categories!: Category[];
}

export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard"',
}

export class Quiz {
  category!: Category;
  difficulty!: Difficulty;
}

export class OpenTdbQuizQuestion {
  category!: string;
  type!: string;
  difficulty!: Difficulty;
  question!: string;
  incorrect_answers!: string[];
  correct_answer!: string;
}
export class QuizQuestion {
  question!: string;
  correctAnswer!: string;
  randomAnswers!:string[];
}

export class QuizResponse extends QuizQuestion {
  userAnswer!:string;
}

export class OpenTdbQuizResponse {
  response_code!: number;
  results!: OpenTdbQuizQuestion[];
}
