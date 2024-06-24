export interface IChangePassword {
    password:string;
    password_new:string;
}

export interface IChangePasswordResponse{
    message:{
        name:string;
        message:string;
        expiredAt:string;
    }
}