// export class QuizDto{
//     constructor(
//         public categoryName?:string,
//         public numQuestions?:string,
//         public title?:string
//     ){

//     }
// }
export class QuizDto {
    categoryName: string;
    numQuestions: number;
    title: string;
  
    constructor(categoryName: string, numQuestions: number, title: string) {
      this.categoryName = categoryName;
      this.numQuestions = numQuestions;
      this.title = title;
    }
  }