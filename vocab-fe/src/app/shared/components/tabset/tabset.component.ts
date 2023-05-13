import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'app-tabset',
  templateUrl: './tabset.component.html',
  styles: [],
})
export class TabsetComponent {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  selectedTab: number = 0;

  // contentChildren are set
  ngAfterContentInit() {
    // get all active tabs
    let activeTabs = this.tabs.filter((tab) => tab.active);

    // if there is no active tab set, activate the first
    if (activeTabs.length === 0) {
      this.selectTab(0);
    }
  }

  selectTab(index: number) {
    // deactivate all tabs
    this.tabs.toArray().forEach((tab) => (tab.active = false));

    // activate the tab the user has clicked on.
    this.tabs.toArray()[index].active = true;
    this.selectedTab = index;
  }
}
