import userModal from "../modals/user.modal";
import { Response } from "express";

// get user by id
export const getUserById = async (id: string, res: Response) => {
    const user = await userModal.findById(id);

    res.status(201).json({
        success: true,
        user,
    })
}