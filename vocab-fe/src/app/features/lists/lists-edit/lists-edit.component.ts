import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ListsService } from 'src/app/core/services/lists/lists.service';
import { WordsService } from 'src/app/core/services/words/words.service';
import { Word } from 'src/app/shared/models/word.model';

@Component({
  selector: 'app-lists-edit',
  templateUrl: './lists-edit.component.html',
  styles: [],
})
export class ListsEditComponent {
  search = new FormControl();
  form = new FormGroup({
    name: new FormControl('', { validators: [Validators.required] }),
    coverImageUrl: new FormControl('', { validators: [Validators.required] }),
    words: new FormArray<FormGroup>([]),
  });

  words$: Observable<Word[]> | undefined;
  filteredOptions: Word[] = [];

  id!: number;

  constructor(
    private wordsService: WordsService,
    private router: Router,
    private route: ActivatedRoute,
    private listsService: ListsService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.words$ = this.wordsService.getAll();

    this.listsService.getOne(this.id).subscribe((data) => {
      this.form.controls.name.setValue(data.name);
      this.form.controls.coverImageUrl.setValue(data.coverImageUrl);
      data.words.forEach((option) => {
        this.form.controls.words.push(
          new FormGroup({
            id: new FormControl({ value: option.id, disabled: true }),
            text: new FormControl({ value: option.text, disabled: true }),
            meaning: new FormControl({ value: option.meaning, disabled: true }),
          })
        );
      });
    });
  }

  onSubmit() {
    this.listsService
      .update(this.form.getRawValue() as any, this.id)
      .subscribe(() => {
        this.router.navigate(['/lists']);
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

  deleteList() {
    this.listsService.remove(this.id).subscribe((data) => {
      this.router.navigate(['/lists']);
    });
  }
}
