import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { WordsService } from 'src/app/core/services/words/words.service';

@Component({
  selector: 'app-words-edit',
  templateUrl: './words-edit.component.html',
  styles: [],
})
export class WordsEditComponent {
  form = new FormGroup({
    text: new FormControl('', { validators: [Validators.required] }),
    meaning: new FormControl('', { validators: [Validators.required] }),
  });

  id!: number;

  constructor(
    private wordsService: WordsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.wordsService.getOne(this.id).subscribe((data) => {
      this.form.controls.text.setValue(data.text);
      this.form.controls.meaning.setValue(data.meaning);
    });
  }

  onSubmit() {
    this.wordsService.update(this.form.value as any, this.id).subscribe(() => {
      this.router.navigate(['words']);
    });
  }
}
