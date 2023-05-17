import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Word } from '../../models/word.model';

@Component({
  selector: 'app-autocomplete',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './autocomplete.component.html',
  styles: [],
})
export class AutocompleteComponent {
  @Input() options: Word[] = [];
  @Output() selectedOption = new EventEmitter<Word>();

  searchControl = new FormControl();
  filteredOptions: Word[] = [];

  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(
        startWith(''),
        map((value) => this._filter(value))
      )
      .subscribe((filteredOptions) => (this.filteredOptions = filteredOptions));
  }

  private _filter(text: string): Word[] {
    const filterValue = text.toLowerCase();
    return this.options.filter((option) =>
      option.text.toLowerCase().includes(filterValue)
    );
  }

  onOptionSelected(option: Word) {
    this.selectedOption.emit(option);
    this.searchControl.setValue('');
    this.filteredOptions = [];
  }
}
