import { IOptionKeys } from "src/app/core/models/IQuestion.model";

export interface IAnswer{
    question: string;
    answer: IOptionKeys;
}

export type Nullable<T> = { [key in keyof T]: T[key] | null};