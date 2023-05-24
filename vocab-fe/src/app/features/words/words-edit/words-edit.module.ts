import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { WordsEditRoutingModule } from './words-edit-routing.module';
import { WordsEditComponent } from './words-edit.component';

@NgModule({
  declarations: [WordsEditComponent],
  imports: [CommonModule, WordsEditRoutingModule, ReactiveFormsModule],
})
export class WordsEditModule {}
