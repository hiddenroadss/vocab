import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { List } from 'src/app/shared/models/list.model';

@Injectable({
  providedIn: 'root',
})
export class ListsService {
  private BASE_URL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<List[]>(`${this.BASE_URL}/lists`);
  }

  getOne(id: number) {
    return this.http.get<List>(`${this.BASE_URL}/lists/${id}`);
  }

  create(list: any) {
    const wordIds = list.words.map((w: any) => w.id);
    delete list.words;
    return this.http.post<List>(`${this.BASE_URL}/lists`, {
      ...list,
      wordIds,
    });
  }

  update(list: Omit<List, 'id'>, id: number) {
    return this.http.patch<List>(`${this.BASE_URL}/lists/${id}`, list);
  }

  remove(id: number) {
    return this.http.delete<List>(`${this.BASE_URL}/lists/${id}`);
  }
}
