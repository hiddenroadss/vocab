import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ListsService } from 'src/app/core/services/lists/lists.service';
import { WordsService } from 'src/app/core/services/words/words.service';
import { Word } from 'src/app/shared/models/word.model';

@Component({
  selector: 'app-lists-create',
  templateUrl: './lists-create.component.html',
  styles: [],
})
export class ListsCreateComponent {
  search = new FormControl();
  form = new FormGroup({
    name: new FormControl('', { validators: [Validators.required] }),
    coverImageUrl: new FormControl('', { validators: [Validators.required] }),
    words: new FormArray<FormGroup>([]),
  });

  words$: Observable<Word[]> | undefined;
  filteredOptions: Word[] = [];

  constructor(
    private listsService: ListsService,
    private router: Router,
    private wordsService: WordsService
  ) {}

  ngOnInit() {
    this.words$ = this.wordsService.getAll();
  }

  onSubmit() {
    this.listsService.create(this.form.getRawValue() as any).subscribe(() => {
      this.router.navigate(['lists']);
    });
  }

  addWord(option: Word) {
    this.search.setValue(null);
    this.filteredOptions = [];

    this.form.controls.words.push(
      new FormGroup({
        id: new FormControl({ value: option.id, disabled: true }),
        text: new FormControl({ value: option.text, disabled: true }),
        meaning: new FormControl({ value: option.meaning, disabled: true }),
      })
    );
  }

  removeWord(index: number) {
    this.form.controls.words.removeAt(index);
  }

  onKeyUp(value: Word[]) {
    this.filteredOptions = value.filter(
      (option) =>
        option.text.toLowerCase().includes(this.search.value.toLowerCase()) &&
        this.search.value &&
        !this.form.controls.words
          .getRawValue()
          .some((w: any) => w.id === option.id)
    );
  }
}
