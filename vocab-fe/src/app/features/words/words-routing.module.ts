import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WordsComponent } from './words.component';

const routes: Routes = [
  { path: '', component: WordsComponent },
  {
    path: 'create',
    loadChildren: () =>
      import('./words-create/words-create.module').then(
        (m) => m.WordsCreateModule
      ),
  },
  {
    path: 'edit/:id',
    loadChildren: () =>
      import('./words-edit/words-edit.module').then((m) => m.WordsEditModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WordsRoutingModule {}
