import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WordsCreateRoutingModule } from './words-create-routing.module';
import { WordsCreateComponent } from './words-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [WordsCreateComponent],
  imports: [CommonModule, WordsCreateRoutingModule, ReactiveFormsModule],
})
export class WordsCreateModule {}
