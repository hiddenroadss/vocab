import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ListsService } from 'src/app/core/services/lists/lists.service';
import { List } from 'src/app/shared/models/list.model';

@Component({
  selector: 'app-lists-details',
  templateUrl: './lists-details.component.html',
  styles: [],
})
export class ListsDetailsComponent {
  id!: string;
  list$: Observable<List> | undefined;
  constructor(
    private route: ActivatedRoute,
    private listService: ListsService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.list$ = this.listService.getOne(+this.id);
  }
}
