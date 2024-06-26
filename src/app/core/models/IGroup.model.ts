export interface IGroup {
    _id: string
  name: string
  status: string
  instructor: string
  students: Student[]
  max_students: number
}

export interface Student {
    _id: string
    first_name: string
    last_name: string
    email: string
  }