export type IOptionKeys = "A" | "B" | "C" | "D";

type IOptions = {[key in IOptionKeys]: string} & {_id?: string};

export interface IQuestion {
    "_id": string,
    "title": string,
    "description": string,
    "options": IOptions,
    "answer": string,
    "status": string,
    "instructor": string,
    "difficulty": string,
    "points": number,
    "type": string
}