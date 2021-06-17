import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuestionFiveComponent } from './pages/question-five/question-five.component';
import { QuestionFourComponent } from './pages/question-four/question-four.component';
import { QuestionOneComponent } from './pages/question-one/question-one.component';
import { QuestionSixComponent } from './pages/question-six/question-six.component';
import { QuestionThreeComponent } from './pages/question-three/question-three.component';
import { QuestionTwoComponent } from './pages/question-two/question-two.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'question-one', component: QuestionOneComponent },
  { path: 'question-two', component: QuestionTwoComponent },
  { path: 'question-three', component: QuestionThreeComponent },
  { path: 'question-four', component: QuestionFourComponent },
  { path: 'question-five', component: QuestionFiveComponent },
  { path: 'question-six', component: QuestionSixComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
