import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsEditRoutingModule } from './lists-edit-routing.module';
import { ListsEditComponent } from './lists-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListsEditComponent],
  imports: [CommonModule, ListsEditRoutingModule, ReactiveFormsModule],
})
export class ListsEditModule {}
