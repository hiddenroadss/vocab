import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListsComponent } from './lists.component';

const routes: Routes = [
  { path: '', component: ListsComponent },
  {
    path: 'create',
    loadChildren: () =>
      import('./lists-create/lists-create.module').then(
        (m) => m.ListsCreateModule
      ),
  },
  {
    path: 'edit/:id',
    loadChildren: () =>
      import('./lists-edit/lists-edit.module').then((m) => m.ListsEditModule),
  },
  {
    path: ':id',
    loadChildren: () =>
      import('./lists-details/lists-details.module').then(
        (m) => m.ListsDetailsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListsRoutingModule {}
