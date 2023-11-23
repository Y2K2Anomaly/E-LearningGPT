import { NextFunction, Response } from "express";
import { CatchAsyncError } from "../middleware/catchAsyncErrors";
import OrderModal from "../modals/order.Modal";

// create new Order
export const newOrder = CatchAsyncError(async (data: any, res: Response, next: NextFunction) => {
    const order = await OrderModal.create(data);

    res.status(201).json({
        success: true,
        order,
    })
})

// Get All users --- only for admin
export const getAllOrdersService = async (res: Response) => {
    const orders = await OrderModal.find().sort({ createdAt: -1 });

    return res.status(200).json({
        success: true,
        orders,
    });
};