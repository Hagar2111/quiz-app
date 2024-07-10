import { IQuestion } from "src/app/core/models/IQuestion.model";

export interface IQuizResult{
    _id: string,
    quiz: string,
    participant: string,
    score: number,
    started_at: Date,
    finished_at: Date,
    questions: IQuestion[]
}