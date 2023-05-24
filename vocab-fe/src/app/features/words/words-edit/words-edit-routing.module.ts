import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WordsEditComponent } from './words-edit.component';

const routes: Routes = [{ path: '', component: WordsEditComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WordsEditRoutingModule { }
