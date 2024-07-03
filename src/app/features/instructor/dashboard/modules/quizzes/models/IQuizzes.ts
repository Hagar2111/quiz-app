import { Options } from "../questions/models/iquestions";

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

export interface IquizDetails{
    _id:string;
    code:string;
    title:string;
    description:string;
    status:string;
    instructor:string;
    group:string;
    questions_number:number;
    questions: IQuestions[];
    schadule:string;
    duration:number;
    score_per_question:number;
    type:string;
    difficulty:string;
    updatedAt:string;
    createdAt:string;
    __v:number;
    closed_at:string;
}

export interface IQuestions{
    _id:string;
    title:string;
    options: Options;
    answer:string
}

export interface IUpdateQuiz{
    title:string,
    description:string,
    group:string,
    schadule:string,
    duration:string,
    score_per_question:string
  }