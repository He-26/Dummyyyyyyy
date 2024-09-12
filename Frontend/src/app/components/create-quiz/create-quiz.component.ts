import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { Quiz } from '../../common/Quiz';
import { QuizDto } from '../../common/QuizDto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrl: './create-quiz.component.css'
})
export class CreateQuizComponent implements OnInit {

  ngOnInit(): void {

  }
  constructor(private quizService: QuizService,
    private router:Router
  ){}
  
  quizDto: QuizDto = new QuizDto('', 0, '');

  createQuiz() {
    this.quizService.createQuiz(this.quizDto).subscribe(response => {
      console.log('Quiz created successfully', response);
    });
  }
}
