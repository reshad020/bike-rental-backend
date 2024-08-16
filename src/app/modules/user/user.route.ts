import { Router } from "express";
import { userControllers } from "./user.controller";
import { authenticateJwt } from "../../middlewares/auth";

const router = Router();
router.get("/me", authenticateJwt, userControllers.getUser);
router.put("/me", authenticateJwt, userControllers.updateUserProfile);

export const userRoutes = router;
