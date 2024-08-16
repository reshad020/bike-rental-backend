import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";

export const authenticateJwt = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;
  if (!token) {
    throw new Error("You are not authorized!");
  }

  try {
    const decoded = jwt.verify(token, config.jwt_access_token as string);
    req.user = decoded as JwtPayload;
    // console.log(req.user);
    console.log(decoded);
    next();
  } catch (error) {
    next(Error("You have no access to this route!"));
  }
};
