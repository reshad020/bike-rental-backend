/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from "express";

const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(400).json({
    success: false,
    message: "Route Not found!",
    error: "",
  });
};

export default notFound;
