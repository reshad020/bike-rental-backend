import { NextFunction, Request, Response } from "express";
import { authServices } from "./auth.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const signup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newUser = await authServices.signupService(req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Sign up successful",
      data: newUser,
    });
  } catch (err) {
    next(err);
  }
};

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const payload = await req.body;
    const { user, accessToken } = await authServices.loginService(payload);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User Login Successfull",
      token: accessToken,
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        role: user.role,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const authControllers = { signup, login };
