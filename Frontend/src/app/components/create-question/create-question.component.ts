import { Component } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { Question } from '../../common/Question';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrl: './create-question.component.css'
})
export class CreateQuestionComponent {


  constructor(private questionService: QuestionService) { }

  question: Question = new Question(0,"","","","","","","","",);

  createQuestion() {
    this.questionService.addQuestion(this.question).subscribe(response => {
      console.log('Quiz created successfully', response);
      this.resetForm();
    });
  }
  resetForm(): void {
    this.question = new Question(0, '', '', '', '', '', '', '', '');
  }
}
