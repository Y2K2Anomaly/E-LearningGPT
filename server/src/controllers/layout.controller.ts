import { Request, Response, NextFunction, response } from "express";
import ErrorHandler from "../utils/ErrorHandler";
import { CatchAsyncError } from "../middleware/catchAsyncErrors";
import LayoutModal from "../modals/layout.modal";
import cloudinary from "cloudinary";

// create layout
export const createLayout = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { type } = req.body;
            const isTypeExist = await LayoutModal.findOne({ type });
            if (isTypeExist) {
                return next(new ErrorHandler(`${type} already exist`, 400))
            };

            if (type === "Banner") {
                const { image, title, subTitle } = req.body;

                const myCloud = await cloudinary.v2.uploader.upload(image, {
                    folder: "layout"
                });

                const banner = {
                    image: {
                        public_id: myCloud.public_id,
                        url: myCloud.secure_url,
                    },
                    title,
                    subTitle
                }

                await LayoutModal.create(banner);
            }

            if (type === "FAQ") {
                const { faq } = req.body;
                const faqItems = await Promise.all(
                    faq.map(async (item: any) => {
                        return {
                            question: item.question,
                            answer: item.answer
                        };
                    })
                );

                await LayoutModal.create({ type: "FAQ", faq: faqItems });
            }
            if (type === "Categories") {
                const { categories } = req.body;
                const categoriesItems = await Promise.all(
                    categories.map(async (item: any) => {
                        return {
                            title: item.title,
                        };
                    })
                );

                await LayoutModal.create({ type: "Categories", categories: categoriesItems });
            }

            res.status(201).json({
                success: true,
                message: "Layout created successfully",
            });
        } catch (error: any) {
            return next(new ErrorHandler(error.message, 500));
        }
    }
);


// Edit Layout
export const editLayout = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { type } = req.body;

            if (type === "Banner") {
                const bannerData: any = await LayoutModal.findOne({ type: "Banner" });
                const { image, title, subTitle } = req.body;
                if (bannerData) {
                    await cloudinary.v2.uploader.destroy(bannerData.image.public_id);
                }

                const myCloud = await cloudinary.v2.uploader.upload(image, {
                    folder: "layout"
                });

                const banner = {
                    type: "Banner",
                    image: {
                        public_id: myCloud.public_id,
                        url: myCloud.secure_url,
                    },
                    title,
                    subTitle,
                };

                await LayoutModal.findByIdAndUpdate(bannerData._id, { banner });
            }

            if (type === "FAQ") {
                const { faq } = req.body;
                const FaqItem = await LayoutModal.findOne({ type: "FAQ" });
                const faqItems = await Promise.all(
                    faq.map(async (item: any) => {
                        return {
                            question: item.question,
                            answer: item.answer
                        };
                    })
                );

                await LayoutModal.findByIdAndUpdate(FaqItem?._id, { type: "FAQ", faq: faqItems });
            }
            if (type === "Categories") {
                const { categories } = req.body;
                const CategoriesData = await LayoutModal.findOne({ type: "Categories" });
                const categoriesItems = await Promise.all(
                    categories.map(async (item: any) => {
                        return {
                            title: item.title,
                        };
                    })
                );

                await LayoutModal.findByIdAndUpdate(CategoriesData?._id, { type: "Categories", categories: categoriesItems });
            }

            res.status(200).json({
                success: true,
                message: "Layout Updated successfully",
            });
        } catch (error: any) {
            return next(new ErrorHandler(error.message, 500));
        }
    }
);


// get layout by type
export const getLayoutByType = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { type } = req.body;
            const layout = await LayoutModal.findOne({ type });
            res.status(200).json({
                success: true,
                layout
            });
        } catch (error: any) {
            return next(new ErrorHandler(error.message, 500));
        }
    }
);