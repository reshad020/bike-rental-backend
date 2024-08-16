import { JwtPayload } from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      user: JwtPayload;
    }
  }
}
