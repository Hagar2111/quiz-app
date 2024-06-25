export interface IChangePassword {
    password:string;
    password_new:string;
}

export interface IChangePasswordResponse{
    message:string;
    data:IChangePasswordResponseData
}

export interface IChangePasswordResponseData{

    _id:string;
    first_name:string;
    last_name:string;
    email:string;
    status:string;
    role:string;

}