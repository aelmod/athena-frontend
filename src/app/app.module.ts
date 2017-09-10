import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { QuestionService } from './questions/question.service';
import { HttpModule } from '@angular/http';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionComponent } from './quiz/question/question.component';
import { AnswerComponent } from './quiz/answer/answer.component';

const appRoutes: Routes = [
  // { path: 'test1', component:  },
  // { path: 'test2/:id',      component:  },
  // {
  //   path: 'test3',
  //   component: ,
  //   data: {  }
  // },
  // { path: '',
  //   redirectTo: '/test4',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    AnswerComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule {}
