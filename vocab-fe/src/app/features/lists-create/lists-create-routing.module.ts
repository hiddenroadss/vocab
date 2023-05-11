import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListsCreateComponent } from './lists-create.component';

const routes: Routes = [{ path: '', component: ListsCreateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListsCreateRoutingModule { }
