import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Page } from './Page';
import { Question } from './Question';

@Injectable()
export class QuestionService {
  constructor(private http: Http) {
  }

  getAll(): Promise<Page<Question>> {
    return this.http.get('api/questions')
      .toPromise()
      .then((res) => {
        return Page.fromResponse(res, 'questions');
      });
  }

  getById(id: number) {
    return this.http.get(`api/questions/${id}`)
      .toPromise()
      .then((res) => {
        return res.json();
      });
  }

}
