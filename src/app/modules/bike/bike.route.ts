import { Router } from "express";
import { authenticateJwt } from "../../middlewares/auth";
import { bikeControllers } from "./bike.controller";

const router = Router();
router.post("/", authenticateJwt, bikeControllers.createBike);
router.get("/", bikeControllers.getBikes);
router.put("/:id", authenticateJwt, bikeControllers.updateBike);
router.delete("/:id", authenticateJwt, bikeControllers.deleteBike);

export const bikeRoutes = router;
