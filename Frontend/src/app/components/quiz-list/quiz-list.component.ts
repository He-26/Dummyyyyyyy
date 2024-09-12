import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { Router } from '@angular/router';
import { Quiz } from '../../common/Quiz';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrl: './quiz-list.component.css'
})
export class QuizListComponent implements OnInit {

  constructor(private quizService: QuizService,
    private router:Router
  ){}

  
  quizzes: Quiz[] = [];

  ngOnInit(): void {
    this.quizService.getAllQuizzes().subscribe(data => {
      this.quizzes = data;
    });
  }

}
