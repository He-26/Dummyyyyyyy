import { Component, OnInit } from '@angular/core';
import { QuestionWrapper } from '../../common/QuestionWrapper';
import { QuizResponse } from '../../common/response.model';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent implements OnInit {

  quizId: number = 0;
  questions: QuestionWrapper[] = [];
  userResponses: QuizResponse[] = [];
  score: number | null = null;
  title: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService
  ) {}

  ngOnInit(): void {
    this.quizId = Number(this.route.snapshot.paramMap.get('id'));
    this.score = Number(this.route.snapshot.paramMap.get('score')); 

    if (this.quizId > 0) {
      this.fetchQuizDetails();
    }
  }

  fetchQuizDetails(): void {
    this.quizService.getQuizQuestions(this.quizId).subscribe(
      (data: QuestionWrapper[]) => {
        this.questions = data;
        this.title = data[0]?.questionTitle || 'Quiz'; // Assuming all questions have the same title
      },
      (error) => {
        console.error('Error fetching quiz details:', error);
      }
    );
  }
}
