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
  {
    path: 'lists',
    loadChildren: () =>
      import('./features/lists/lists.module').then((m) => m.ListsModule),
  },
  {
    path: 'lists-create',
    loadChildren: () =>
      import('./features/lists-create/lists-create.module').then(
        (m) => m.ListsCreateModule
      ),
  },
  {
    path: 'lists-edit/:id',
    loadChildren: () =>
      import('./features/lists-edit/lists-edit.module').then(
        (m) => m.ListsEditModule
      ),
  },
  {
    path: 'lists-details/:id',
    loadChildren: () =>
      import('./features/lists-details/lists-details.module').then(
        (m) => m.ListsDetailsModule
      ),
  },
  { path: 'learn/:id', loadChildren: () => import('./features/learn/learn.module').then(m => m.LearnModule) },
  { path: '**', redirectTo: 'words' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
