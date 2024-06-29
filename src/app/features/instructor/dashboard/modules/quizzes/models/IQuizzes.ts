export interface Quizzes {
}

export interface IQuiz {
    title:string;
    description: string;
    group:string;
    questions_number:number;
    difficulty:string;
    type:string;
    schadule:string;
    duration:string;
    score_per_question:string;
}

export interface IQuizResponse{
    message:string;
    timestamp:string;
}