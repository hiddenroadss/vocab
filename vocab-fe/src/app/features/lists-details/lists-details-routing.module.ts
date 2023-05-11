import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListsDetailsComponent } from './lists-details.component';

const routes: Routes = [{ path: '', component: ListsDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListsDetailsRoutingModule { }
