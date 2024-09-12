import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private apiUrl = 'http://localhost:9090/question/add';
  constructor(private http: HttpClient) { }

  addQuestion(question: any): Observable<string> {
    return this.http.post<string>(this.apiUrl, question);
  }
}
