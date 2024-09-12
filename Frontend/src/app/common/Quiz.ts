// export class Quiz{
//     constructor(
//         public id?:number,
//         public title?:string,
//         public questionIds?:[]
//     ){}
// }
export class Quiz {
    id: number;
    title: string;
    questionIds: number[];
  
    constructor(id: number, title: string, questionIds: number[]) {
      this.id = id;
      this.title = title;
      this.questionIds = questionIds;
    }
  }