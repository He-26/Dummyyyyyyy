// export class QuestionWrapper{
//     constructor(
//         public id:number,
//         public QuestionTitle:string,
//         public option1:string,
//         public option2:string,
//         public option3:string,
//         public option4:string,
//     ){}
// }
export class QuestionWrapper {
    id: number;
    questionTitle: string;
    option1: string;
    option2: string;
    option3: string;
    option4: string;
    solution:string
  
    constructor(id: number, questionTitle: string, option1: string,
       option2: string, option3: string, option4: string, solution: string) {
      this.id = id;
      this.questionTitle = questionTitle;
      this.option1 = option1;
      this.option2 = option2;
      this.option3 = option3;
      this.option4 = option4;
      this.solution=solution;
    }
}