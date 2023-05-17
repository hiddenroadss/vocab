import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsCreateRoutingModule } from './lists-create-routing.module';
import { ListsCreateComponent } from './lists-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AutocompleteComponent } from 'src/app/shared/components/autocomplete/autocomplete.component';

@NgModule({
  declarations: [ListsCreateComponent],
  imports: [
    CommonModule,
    ListsCreateRoutingModule,
    ReactiveFormsModule,
    AutocompleteComponent,
  ],
})
export class ListsCreateModule {}
