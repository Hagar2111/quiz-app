import { IUser } from "./IUser.model";
import { IGroup } from "./IGroup.model";

export interface IStudent extends Omit<IUser, "role">{
    role: "Student";
    group: IGroup;
    avg_score: number;
}