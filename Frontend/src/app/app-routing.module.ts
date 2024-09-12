import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateQuizComponent } from './components/create-quiz/create-quiz.component';
import { QuizListComponent } from './components/quiz-list/quiz-list.component';
import { QuizDetailsComponent } from './components/quiz-details/quiz-details.component';
import { ResultComponent } from './components/result/result.component';
import { CreateQuestionComponent } from './components/create-question/create-question.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'quiz-list',component:QuizListComponent},
  {path: 'create-quiz', component:CreateQuizComponent},
  {path:'quiz/:id', component:QuizDetailsComponent},
  { path: 'result/:id/:score', component: ResultComponent },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'create-question',component:CreateQuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
