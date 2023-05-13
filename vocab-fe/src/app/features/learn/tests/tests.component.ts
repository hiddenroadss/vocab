import { Component, Input } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Observable, switchMap, tap } from 'rxjs';
import { QuizService } from 'src/app/core/services/quiz/quiz.service';
import { WordsService } from 'src/app/core/services/words/words.service';
import { Question } from 'src/app/shared/models/question.model';
import { Word } from 'src/app/shared/models/word.model';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styles: [],
})
export class TestsComponent {
  form = new FormGroup({
    questions: new FormArray<FormGroup>([]),
  });
  @Input() wordsToTest: Word[] = [];
  words: Word[] = [];
  questions: Question[] = [];
  results: { score: number; incorrect: Question[] } | undefined;

  constructor(
    private wordsService: WordsService,
    private quizService: QuizService
  ) {}

  ngOnInit() {
    this.wordsService
      .getAll()
      .pipe(
        tap((words) => {
          this.words = words;
        })
      )
      .subscribe((words) => {
        this.questions = this.quizService.generateQuestions(
          words,
          this.wordsToTest
        );
        this.questions.forEach((q) => {
          this.form.controls.questions.push(
            new FormGroup({
              id: new FormControl(q.word.id),
              answer: new FormControl(null),
            })
          );
        });
      });
  }

  onSubmit() {
    this.results = this.quizService.scoreQuiz(
      this.questions,
      this.form.value.questions!.map((q) => q.answer)
    );
  }

  onChange(option: string, i: any) {
    this.form.controls.questions.at(i).controls['answer'].setValue(option);
  }
}
