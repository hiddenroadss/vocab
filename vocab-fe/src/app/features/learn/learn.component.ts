import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { ListsService } from 'src/app/core/services/lists/lists.service';
import { List } from 'src/app/shared/models/list.model';
import { Word } from 'src/app/shared/models/word.model';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styles: [``],
})
export class LearnComponent {
  id!: string;
  list$: Observable<List> | undefined;
  words: Word[] = [];
  currentWord: Word | undefined;

  constructor(
    private route: ActivatedRoute,
    private listService: ListsService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.list$ = this.listService.getOne(+this.id).pipe(
      tap((list) => {
        this.words = list.words;
        if (this.words.length > 0) {
          this.currentWord = this.words[0];
        }
      })
    );
  }
}
