import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DividerModule } from 'primeng/divider';
import { HomeComponent } from './home/home.component';
import { QuestionFiveComponent } from './question-five/question-five.component';
import { QuestionFourComponent } from './question-four/question-four.component';
import { QuestionOneComponent } from './question-one/question-one.component';
import { QuestionSixComponent } from './question-six/question-six.component';
import { QuestionThreeComponent } from './question-three/question-three.component';
import { QuestionTwoComponent } from './question-two/question-two.component';

@NgModule({
  declarations: [
    HomeComponent,
    QuestionOneComponent,
    QuestionTwoComponent,
    QuestionThreeComponent,
    QuestionFourComponent,
    QuestionFiveComponent,
    QuestionSixComponent,
  ],
  imports: [CommonModule, RouterModule, DividerModule, ReactiveFormsModule],
})
export class PagesModule {}
