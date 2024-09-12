export class Question {
        id: number;
        questionTitle: string;
        option1: string;
        option2: string;
        option3: string;
        option4: string;
        rightAnswer: string;
        difficultylevel: string;
        category: string;
    
        constructor(
            id: number,
            questionTitle: string,
            option1: string,
            option2: string,
            option3: string,
            option4: string,
            rightAnswer: string,
            difficultylevel: string,
            category: string
        ) {
            this.id = id;
            this.questionTitle = questionTitle;
            this.option1 = option1;
            this.option2 = option2;
            this.option3 = option3;
            this.option4 = option4;
            this.rightAnswer = rightAnswer;
            this.difficultylevel = difficultylevel;
            this.category = category;
        }
    }