export interface ILogin {
  message: string
  data: Data
}

export interface Data {
  accessToken: string
  refreshToken: string
  profile: Profile
}

export interface Profile {
  _id: string
  first_name: string
  last_name: string
  email: string
  status: string
  role: string
}

export interface ILogoutRes {
  message: string;
}

export interface IUpdateProfileReq {
  first_name: string;
  last_name: string;
  email: string;

}


export interface IUpdateProfileRes {
  data: IUpdateProfileResData;
  message: string;
}

export interface IUpdateProfileResData {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  status: string;
  role: string;
}