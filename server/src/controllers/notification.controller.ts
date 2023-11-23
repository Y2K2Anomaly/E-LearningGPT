import NotificationModal from "../modals/notifications.Modal";
import { Request, Response, NextFunction } from "express";
import { CatchAsyncError } from "../middleware/catchAsyncErrors";
import ErrorHandler from "../utils/ErrorHandler";

// get all notifications --- only admin
export const getNotifications = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const notifications = await NotificationModal.find().sort({ createdAt: -1 });

        res.status(201).json({
            success: true,
            notifications,
        });
    } catch (error: any) {
        return next(new ErrorHandler(error.message, 500));
    }
});


// update notification status --- only admin
export const updateNotification = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {

    try {
        const notification = await NotificationModal.findById(req.params.id);

        if (!notification) {
            return next(new ErrorHandler("Notification not found", 404));
        } else {
            notification.status ? (notification.status = 'read') : notification?.status;
        }

        await notification.save();

        const notifications = await NotificationModal.find().sort({ createdAt: -1 });


        res.status(201).json({
            success: true,
            notifications
        });
    } catch (error: any) {
        return next(new ErrorHandler(error.message, 500));
    }
}
); 