import { Component, OnInit } from '@angular/core';
import { QuestionService } from './question/question.service';
import { Question } from './question/Question';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private questionService: QuestionService) {}

  private questions: Question[] = [];

  ngOnInit() {
    this.questionService.getAll()
      .then((page) => {
        this.questions = page.list;
      });
  }
}
