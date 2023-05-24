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
    path: 'lists',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/lists/lists.module').then((m) => m.ListsModule),
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
