import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsDetailsRoutingModule } from './lists-details-routing.module';
import { ListsDetailsComponent } from './lists-details.component';


@NgModule({
  declarations: [
    ListsDetailsComponent
  ],
  imports: [
    CommonModule,
    ListsDetailsRoutingModule
  ]
})
export class ListsDetailsModule { }
