import { Request } from "express";
import { IUser } from "../modals/user.modal";

declare global {
    namespace Express {
        interface Request {
            user?: IUser
        }
        interface Response {
            user?: IUser
        }
    }
}