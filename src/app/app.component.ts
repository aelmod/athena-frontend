import {Component} from '@angular/core';
import {QuestionService} from './questions/question.service';

@Component({
  selector: 'app-athena',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private questionService: QuestionService) {
    questionService.getAllQuestions()
      .then((questions) => {
        console.log(questions);
      });
  }
}
