import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsetComponent } from './tabset.component';
import { TabComponent } from './tab/tab.component';

@NgModule({
  declarations: [TabsetComponent, TabComponent],
  imports: [CommonModule],
  exports: [TabsetComponent, TabComponent],
})
export class TabsetModule {}
