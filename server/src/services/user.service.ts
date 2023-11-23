import userModal from "../modals/user.modal";
import { Response } from "express";
import { redis } from "../utils/redis";
import { CatchAsyncError } from "../middleware/catchAsyncErrors";

// get user by id
export const getUserById = async (id: string, res: Response) => {
    const userJson = await redis.get(id);

    if (userJson) {
        const user = JSON.parse(userJson);
        res.status(201).json({
            success: true,
            user,
        });
    }

};

// Get All users --- only for admin
export const getAllUsersService = async (res: Response) => {
    const users = await userModal.find().sort({ createdAt: -1 });

    return res.status(200).json({
        success: true,
        users,
    });
};