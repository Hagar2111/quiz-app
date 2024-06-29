import { IUser } from "./IUser.model";
import { IGroup } from "./IGroup.model";

export interface IStudent extends Omit<IUser, "role">{
    role: "Student";
    group: IGroup;
    avg_score: number;
}


export interface IStudentResponse {
    data: DataStudent
    message: string
  }
  
  export interface DataStudent {
    _id: string
    first_name: string
    last_name: string
    email: string
    status: string
    role: string
    group: string
    avg_score: number
  }

  export interface IMsg{
    message: string

  }

  export interface IStudentResAddToGroup {
    data: DataStudentAddToGroup
    message: string
  }
  
  export interface DataStudentAddToGroup {
    data: Data2
    message: string
  }
  
  export interface Data2 {
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

  export interface IStudentWithGroup {
    _id: string
    first_name: string
    last_name: string
    email: string
    status: string
    role: string
    group: Group
  }
  
  export interface Group {
    _id: string
    name: string
    status: string
    instructor: string
    students: any[]
    max_students: number
    updatedAt: string
    createdAt: string
  }  