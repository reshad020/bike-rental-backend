/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from "express";
export const globalErrorHandler = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  err: any,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  const statusCode = 500;
  const message = err.message || "Something Went Wrong!";
  res.status(statusCode).json({
    success: false,
    message,
    error: err,
  });
};
