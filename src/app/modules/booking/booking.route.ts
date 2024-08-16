import { Router } from "express";
import { authenticateJwt } from "../../middlewares/auth";
import { bookingControllers } from "./booking.controller";

const router = Router();
router.post("/", authenticateJwt, bookingControllers.createBooking);
router.put("/:id/return", authenticateJwt, bookingControllers.updateBikeReturn);
router.get("/", authenticateJwt, bookingControllers.getUserBooking);

export const bookingRoutes = router;
