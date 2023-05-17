import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Word } from 'src/app/shared/models/word.model';

@Injectable({
  providedIn: 'root',
})
export class WordsService {
  private BASE_URL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Word[]>(`${this.BASE_URL}/words`);
  }

  getOne(id: number) {
    return this.http.get<Word>(`${this.BASE_URL}/words/${id}`);
  }

  create(word: Omit<Word, 'id'>) {
    return this.http.post<Word>(`${this.BASE_URL}/words`, word);
  }

  update(word: Omit<Word, 'id'>, id: number) {
    return this.http.patch<Word>(`${this.BASE_URL}/words/${id}`, word);
  }

  remove(id: number) {
    return this.http.delete<Word>(`${this.BASE_URL}/words/${id}`);
  }
}
