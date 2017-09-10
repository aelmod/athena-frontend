import {Injectable, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class QuestionService {
  constructor(private http: Http) {
  }

  getAllQuestions() {
    return this.http.get('assets/data.json')
      .toPromise()
      .then((res) => {
        return res.json();
      });
  }
}
