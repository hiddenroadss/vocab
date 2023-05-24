import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WordsService } from 'src/app/core/services/words/words.service';

@Component({
  selector: 'app-words-create',
  templateUrl: './words-create.component.html',
  styles: [],
})
export class WordsCreateComponent {
  form = new FormGroup({
    text: new FormControl('', { validators: [Validators.required] }),
    meaning: new FormControl('', { validators: [Validators.required] }),
  });

  constructor(private wordsService: WordsService, private router: Router) {}

  onSubmit() {
    this.wordsService.create(this.form.value as any).subscribe(() => {
      this.router.navigate(['words']);
    });
  }
}
