import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './features/auth/guards/auth.guard';

const routes: Routes = [
  {
    path: 'words',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/words/words.module').then((m) => m.WordsModule),
  },
  {
    path: 'words-create',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/words-create/words-create.module').then(
        (m) => m.WordsCreateModule
      ),
  },
  {
    path: 'words-edit/:id',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/words-edit/words-edit.module').then(
        (m) => m.WordsEditModule
      ),
  },
  {
    path: 'lists',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/lists/lists.module').then((m) => m.ListsModule),
  },
  {
    path: 'lists-create',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/lists-create/lists-create.module').then(
        (m) => m.ListsCreateModule
      ),
  },
  {
    path: 'lists-edit/:id',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/lists-edit/lists-edit.module').then(
        (m) => m.ListsEditModule
      ),
  },
  {
    path: 'lists-details/:id',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/lists-details/lists-details.module').then(
        (m) => m.ListsDetailsModule
      ),
  },
  {
    path: 'learn/:id',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/learn/learn.module').then((m) => m.LearnModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  { path: '**', redirectTo: 'auth/sign-in' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
