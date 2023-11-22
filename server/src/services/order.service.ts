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