import { Component, OnInit } from '@angular/core';
import { QuestionService } from './question/question.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private questionService: QuestionService) {}

  private questions: any;

  ngOnInit() {
    this.questionService.getAllQuestions()
      .then((res) => {
        this.questions = res._embedded;
      });
  }
}
