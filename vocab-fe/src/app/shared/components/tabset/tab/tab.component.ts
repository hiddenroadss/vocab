import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  template: `
    <div [hidden]="!active">
      <ng-content></ng-content>
    </div>
  `,
  styles: [],
})
export class TabComponent {
  @Input() tabTitle: string = '';
  @Input() active = false;
}
