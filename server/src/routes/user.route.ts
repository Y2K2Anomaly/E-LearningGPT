import express from "express";
import { activateUser, getUserInfo, loginUser, logoutUser, registerationUser, socialAuth, updateAccessToken, updatePassword, updateUserInfo } from "../controllers/user.controller";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
const userRouter = express.Router();

userRouter.post('/registration', registerationUser);
userRouter.post('/activate-user', activateUser);
userRouter.post('/login', loginUser);
userRouter.post("/social-auth", socialAuth);

userRouter.get('/logout', isAuthenticated, logoutUser);
userRouter.get("/refresh", updateAccessToken);
userRouter.get("/me", isAuthenticated, getUserInfo);

userRouter.put("/update-user-info", isAuthenticated, updateUserInfo);
userRouter.put("/update-user-password", isAuthenticated, updatePassword);

export default userRouter;
