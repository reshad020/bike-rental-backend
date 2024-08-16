import { NextFunction, Request, Response } from "express";
import { userServices } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = await req.user.userId;
    const data = await userServices.getUserProfile(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User profile retrieved successfully",
      data: data,
    });
  } catch (error) {
    next(error);
  }
};

const updateUserProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = await req.user.userId;
    const updateData = await req?.body;
    const result = await userServices.updateProfile(id, updateData);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Profile updated successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const userControllers = { getUser, updateUserProfile };
