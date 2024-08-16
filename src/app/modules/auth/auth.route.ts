import { Router } from "express";
import { authControllers } from "./auth.controller";

const router = Router();

// Signup route
router.post("/signup", authControllers.signup);
router.post("/login", authControllers.login);

export const authRoutes = router;
