export interface IGroup {
    _id: string
  name: string
  status: string
  instructor: string
  students: Student[]
  max_students: number
}


export interface IGroupResponse {
  _id: string
name: string
status: string
instructor: string
students: string[]
max_students: number
}

export interface IStudent {
  _id: string
  first_name: string
  last_name: string
  email: string
}

export interface IUpdateOrAddGroup{
  name: string
  students: string[]
}

export interface IAddUpdatedDeleteGroupRes {
  data: IGroupResponse
  message: string
}

export interface Student {
    _id: string
    first_name: string
    last_name: string
    email: string
  }