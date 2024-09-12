import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quiz } from '../common/Quiz';
import { Observable } from 'rxjs';
import { QuestionWrapper } from '../common/QuestionWrapper';
import { QuizDto } from '../common/QuizDto';
import { QuizResponse } from '../common/response.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private baseUrl = 'http://localhost:8090/quiz';

  constructor(private http:HttpClient) { }

  createQuiz(quizDto: QuizDto): Observable<QuizDto> {
    return this.http.post<QuizDto>(`${this.baseUrl}/create`, quizDto);
  }

  getAllQuizzes(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(`${this.baseUrl}`);
  }

  getQuizQuestions(id: number): Observable<QuestionWrapper[]> {
    return this.http.get<QuestionWrapper[]>(`${this.baseUrl}/get/${id}`);
  }

  submitQuiz(id: number, responses: QuizResponse[]): Observable<number> {
    return this.http.post<number>(`${this.baseUrl}/submit/${id}`, responses);
  }
}
