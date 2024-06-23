
export interface IRegisterResponse {
    message: string
    data: IRegisterData
  }
  
  export interface IRegisterData {
    first_name: string
    last_name: string
    email: string
    status: string
    role: string
    _id: string
   
  }