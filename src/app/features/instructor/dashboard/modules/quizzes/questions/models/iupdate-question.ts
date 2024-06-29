

export interface IUpdateQuestion {
  data: Data
  message: string
}

export interface Data {
  _id: string
  title: string
  description: string
  options: Options
  answer: string
  status: string
  instructor: string
  difficulty: string
  points: number
  type: string
}

export interface Options {
  A: string
  B: string
  C: string
  D: string
  _id: string
}
