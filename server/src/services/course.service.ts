import { Response } from "express";
import CourseModal from "../modals/course.modal";
import { CatchAsyncError } from "../middleware/catchAsyncErrors";

// create course
export const createCourse = CatchAsyncError(async (data: any, res: Response) => {
    const course = await CourseModal.create(data);

    res.status(201).json({
        success: true,
        course
    });
});

// Get All Courses --- only for admin
export const getAllCoursesService = async (res: Response) => {
    const courses = await CourseModal.find().sort({ createdAt: -1 });

    return res.status(200).json({
        success: true,
        courses,
    });
};