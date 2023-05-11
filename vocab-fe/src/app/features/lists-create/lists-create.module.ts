import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsCreateRoutingModule } from './lists-create-routing.module';
import { ListsCreateComponent } from './lists-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListsCreateComponent],
  imports: [CommonModule, ListsCreateRoutingModule, ReactiveFormsModule],
})
export class ListsCreateModule {}
