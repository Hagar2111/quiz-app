export type Root = IAllGroups[]

export interface IAllGroups {
  _id: string
  name: string
  status: string
  instructor: string
  students: string[]
  max_students: number
}
