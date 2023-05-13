import { Component, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Word } from 'src/app/shared/models/word.model';

@Component({
  selector: 'app-flashcards',
  templateUrl: './flashcards.component.html',
  styles: [],
  animations: [
    trigger('flip', [
      state('active', style({ transform: 'rotateY(180deg)' })),
      state('inactive', style({ transform: 'rotateY(0)' })),
      transition('active => inactive', animate('800ms ease-out')),
      transition('inactive => active', animate('400ms ease-in')),
    ]),
  ],
})
export class FlashcardsComponent {
  @Input() currentWord: Word | undefined;
  @Input() words: Word[] = [];
  @Input() listName = '';
  isFlipped = false;
  currentIndex: number = 0;

  previousWord() {
    this.isFlipped = false;
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.currentWord = this.words[this.currentIndex];
    }
  }

  nextWord() {
    this.isFlipped = false;

    if (this.currentIndex < this.words.length - 1) {
      this.currentIndex++;
      this.currentWord = this.words[this.currentIndex];
    }
  }

  toggleFlip() {
    this.isFlipped = !this.isFlipped;
  }
}
