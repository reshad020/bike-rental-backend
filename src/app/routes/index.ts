import express from "express";
import { StudentRoutes } from "../modules/student/student.route";
import { authRoutes } from "../modules/auth/auth.route";
import { userRoutes } from "../modules/user/user.route";
import { bikeRoutes } from "../modules/bike/bike.route";
import { bookingRoutes } from "../modules/booking/booking.route";

const router = express.Router();

router.use("/students", StudentRoutes);
router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/bikes", bikeRoutes);
router.use("/rental", bookingRoutes);

export default router;
