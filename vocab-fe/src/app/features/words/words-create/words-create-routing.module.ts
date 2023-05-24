import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WordsCreateComponent } from './words-create.component';

const routes: Routes = [{ path: '', component: WordsCreateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WordsCreateRoutingModule { }
