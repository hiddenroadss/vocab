import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListsEditComponent } from './lists-edit.component';

const routes: Routes = [{ path: '', component: ListsEditComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListsEditRoutingModule { }
