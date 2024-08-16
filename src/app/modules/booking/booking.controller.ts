import { NextFunction, Request, Response } from "express";
import { bookingServices } from "./booking.service";
import mongoose from "mongoose";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { TBooking } from "./booking.interface";

const createBooking = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = await req.user?.userId;
    console.log("userId from controller", userId);
    const userIdObjectId = new mongoose.Types.ObjectId(userId);
    const { bikeId, startTime } = await req.body;
    const bikeObjectId = new mongoose.Types.ObjectId(bikeId);
    const parsedStartTime = new Date(startTime);
    const bookingDetail: TBooking = {
      userId: userIdObjectId,
      bikeId: bikeObjectId,
      startTime: parsedStartTime,
    };
    const result = await bookingServices.createBookingIntoDb(
      userIdObjectId,
      bookingDetail
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Rental created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const updateBikeReturn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userRole = req.user?.role;
    const bookingId = req.params?.id;
    if (userRole === "admin") {
      const result = await bookingServices.updateBikeReturnIntoDb(bookingId);
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Rental updated Successfully",
        data: result,
      });
    } else {
      throw new Error("You are not authorized for this route");
    }
  } catch (error) {
    next(error);
  }
};

const getUserBooking = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = await req.user.userId;
    const result = await bookingServices.getBookingFromDb(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Rental retrived for user Successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const bookingControllers = {
  createBooking,
  updateBikeReturn,
  getUserBooking,
};
