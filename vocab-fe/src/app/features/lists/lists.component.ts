import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ListsService } from 'src/app/core/services/lists/lists.service';
import { List } from 'src/app/shared/models/list.model';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styles: [],
})
export class ListsComponent {
  lists$: Observable<List[]> | undefined;
  constructor(private listsService: ListsService) {}

  ngOnInit() {
    this.lists$ = this.listsService.getAll();
  }
}
