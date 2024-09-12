import { Component, OnInit } from '@angular/core';
import { QuestionWrapper } from '../../common/QuestionWrapper';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../../services/quiz.service';
import { QuizResponse } from '../../common/response.model';

@Component({
  selector: 'app-quiz-details',
  templateUrl: './quiz-details.component.html',
  styleUrl: './quiz-details.component.css'
})
export class QuizDetailsComponent implements OnInit {
  quizId: number = 0;
  questions: QuestionWrapper[] = [];
  userResponses: string[] = [];  // This array stores the user's responses
  score: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.quizId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.quizId > 0) {
      this.fetchQuizQuestions();
    }
  }

  fetchQuizQuestions(): void {
    this.quizService.getQuizQuestions(this.quizId).subscribe(
      (data: QuestionWrapper[]) => {
        this.questions = data;
        this.userResponses = new Array(data.length).fill(''); // Initialize user responses array
      },
      (error) => {
        console.error('Error fetching quiz questions:', error);
      }
    );
  }

  submitQuiz(): void {
    // Check if userResponses and questions are properly initialized
    if (this.userResponses.length !== this.questions.length) {
      console.error('User responses array length does not match the number of questions.');
      return;
    }

    // Map the user's responses to the corresponding question IDs
    const responses: QuizResponse[] = this.questions.map((question, index) => {
      return {
        id: question.id,
        response: this.userResponses[index] || ''  // Ensure a response is always provided, even if empty
      };
    });

    // Debugging: Log the responses before submission to verify
    console.log('User Responses:', responses);

    // Call the service to submit the quiz and calculate the score
    this.quizService.submitQuiz(this.quizId, responses).subscribe(
      (score: number) => {
        // this.score = score;  // Store the score after the quiz is submitted
        this.router.navigate(['/result', this.quizId, score]); 
        // this.router.navigate(['/result', this.quizId], { 
        //   state: { responses, questions: this.questions, score }
        // });
      },
      (error) => {
        console.error('Error submitting quiz:', error);
      }
    );
  }
}
