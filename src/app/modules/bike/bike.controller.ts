import { NextFunction, Request, Response } from "express";
import { bikeServices } from "./bike.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const createBike = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userRole = req.user?.role;
    if (userRole === "admin") {
      const bikeData = await req.body;
      const result = await bikeServices.createBikeIntoDb(bikeData);
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Bike added successfully",
        data: result,
      });
    } else {
      throw new Error("You are not authorized for this route");
    }
  } catch (error) {
    next(error);
  }
};

const getBikes = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await bikeServices.getBikesFromDb();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Bike retrieved successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const updateBike = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userRole = req.user?.role;
    const id = req.params.id;
    const updateData = await req.body;
    if (userRole === "admin") {
      const result = await bikeServices.updateBikeIntoDb(id, updateData);
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Bike updated successfully",
        data: result,
      });
    } else {
      throw new Error("You are not authorized for this route");
    }
  } catch (error) {
    next(error);
  }
};
const deleteBike = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userRole = req.user?.role;
    const id = req.params.id;
    if (userRole === "admin") {
      const result = await bikeServices.deleteBikeIntoDb(id);
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Bike deleted successfully",
        data: result,
      });
    } else {
      throw new Error("You are not authorized for this route");
    }
  } catch (error) {
    next(error);
  }
};

export const bikeControllers = { createBike, getBikes, updateBike, deleteBike };
