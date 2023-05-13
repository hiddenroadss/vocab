import { Injectable } from '@angular/core';
import { Question } from 'src/app/shared/models/question.model';
import { Word } from 'src/app/shared/models/word.model';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor() {}

  generateQuestions(words: Word[], wordsToTest: Word[]): Question[] {
    const questions: Question[] = [];

    wordsToTest.forEach((wordToTest) => {
      const incorrectChoices = words
        .filter((word) => word.id !== wordToTest.id)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)
        .map((word) => word.meaning);

      const correctChoice = wordToTest.meaning;

      const choices = [...incorrectChoices, correctChoice].sort(
        () => 0.5 - Math.random()
      );

      questions.push({
        word: wordToTest,
        choices: choices,
      });
    });

    return questions;
  }

  scoreQuiz(
    wordQuizzes: Question[],
    answers: string[]
  ): { score: number; incorrect: Question[] } {
    let score = 0;
    let incorrect: Question[] = [];

    for (let i = 0; i < wordQuizzes.length; i++) {
      if (wordQuizzes[i].word.meaning === answers[i]) {
        score++;
      } else {
        incorrect.push(wordQuizzes[i]);
      }
    }

    return { score, incorrect };
  }
}
