import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'words',
    loadChildren: () =>
      import('./features/words/words.module').then((m) => m.WordsModule),
  },
  {
    path: 'words-create',
    loadChildren: () =>
      import('./features/words-create/words-create.module').then(
        (m) => m.WordsCreateModule
      ),
  },
  {
    path: 'words-edit/:id',
    loadChildren: () =>
      import('./features/words-edit/words-edit.module').then(
        (m) => m.WordsEditModule
      ),
  },
  { path: '**', redirectTo: 'words' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
