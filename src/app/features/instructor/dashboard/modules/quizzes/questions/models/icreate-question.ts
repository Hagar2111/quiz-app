
export interface ICreateQuestion {
  data: Data
  message: string
}

export interface Data {
  title: string
  description: string
  options: Options
  answer: string
  status: string
  instructor: string
  difficulty: string
  points: number
  type: string
  _id: string
  updatedAt: string
  createdAt: string
  __v: number
}

export interface Options {
  A: string
  B: string
  C: string
  D: string
  _id: string
}
