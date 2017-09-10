export class Question {
  private id: number;
  public content: string;
  // private answers: Answer[];
  constructor(question: any) {
    this.content = question.content;
  }
}
