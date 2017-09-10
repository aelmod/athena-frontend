import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionComponent } from './quiz/question/question.component';
import { AdditionalInfoComponent } from './quiz/additional-info/additional-info.component';
import { QuestionService } from './quiz/question/question.service';

const appRoutes: Routes = [
  // { path: 'test1', component: QuizComponent },
  // { path: 'question/:id',      component: QuizComponent },
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
    QuizComponent,
    QuestionComponent,
    AdditionalInfoComponent,
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
