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

  create(word: Omit<List, 'id'>) {
    return this.http.post<List>(`${this.BASE_URL}/lists`, word);
  }

  update(word: Omit<List, 'id'>, id: number) {
    return this.http.patch<List>(`${this.BASE_URL}/lists/${id}`, word);
  }

  remove() {}
}
