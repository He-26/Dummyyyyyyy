import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { QuizService } from './services/quiz.service';
import { CreateQuizComponent } from './components/create-quiz/create-quiz.component';
import { FormsModule } from '@angular/forms';
import { QuizListComponent } from './components/quiz-list/quiz-list.component';
import { QuizDetailsComponent } from './components/quiz-details/quiz-details.component';
import { ResultComponent } from './components/result/result.component';
import { CreateQuestionComponent } from './components/create-question/create-question.component';
import { QuestionService } from './services/question.service';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateQuizComponent,
    QuizListComponent,
    QuizDetailsComponent,
    ResultComponent,
    CreateQuestionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    QuizService,
    QuestionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
