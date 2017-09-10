import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { AnswerComponent } from './answer/answer.component';
import { RouterModule, Routes } from '@angular/router';

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
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
