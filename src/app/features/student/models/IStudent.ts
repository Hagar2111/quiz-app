export interface IStudent {
}
export type AllQuiz = IQuizRes[]

export type AllResult = IAllResult[]


export interface IQuizRes {
  _id: string
  code: string
  title: string
  description: string
  status: string
  instructor: string
  group: string
  questions_number: number
  questions: Question[]
  schadule: string
  duration: number
  score_per_question: number
  type: string
  difficulty: string
  updatedAt: string
  createdAt: string
  __v: number
  participants?: number
  closed_at?: string


}



export interface Question {
  _id: string
  title: string
  options: Options
}

export interface Options {
  A: string
  B: string
  C: string
  D: string
  _id: string
}

export interface IAllResult {
  quiz: IQuizRes
  result: Result
}

export interface Result {
  _id: string
  quiz: Quiz2
  participant: Participant
  score: number
  started_at: string
}

export interface Quiz2 {
  _id: string
  title: string
}

export interface Participant {
  _id: string
  first_name: string
  last_name: string
  email: string
}