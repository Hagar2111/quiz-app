import { IUser } from "./IUser.model";

export interface IInstractor extends Omit<IUser, "role">{
    role: "Instractor";
}