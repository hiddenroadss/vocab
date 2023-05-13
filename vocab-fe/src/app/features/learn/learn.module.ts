import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearnRoutingModule } from './learn-routing.module';
import { LearnComponent } from './learn.component';
import { TabsetModule } from 'src/app/shared/components/tabset/tabset.module';
import { FlashcardsComponent } from './flashcards/flashcards.component';
import { TestsComponent } from './tests/tests.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LearnComponent, FlashcardsComponent, TestsComponent],
  imports: [
    CommonModule,
    LearnRoutingModule,
    TabsetModule,
    ReactiveFormsModule,
  ],
})
export class LearnModule {}
