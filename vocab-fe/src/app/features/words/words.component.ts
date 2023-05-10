import { Component } from '@angular/core';
import { WordsService } from 'src/app/core/services/words/words.service';
import { Word } from 'src/app/shared/models/word.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styles: [],
})
export class WordsComponent {
  words$: Observable<Word[]> | undefined;
  constructor(private wordsService: WordsService) {}

  ngOnInit() {
    this.words$ = this.wordsService.getAll();
  }
}
