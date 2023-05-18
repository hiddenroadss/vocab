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

  deleteWord(word: Word) {
    this.wordsService.remove(word.id).subscribe();
  }

  page = 1;
  limit = 10;

  loadWords() {
    this.words$ = this.wordsService.getAll(this.page, this.limit);
  }

  nextPage() {
    this.page++;
    this.loadWords();
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
      this.loadWords();
    }
  }
}
