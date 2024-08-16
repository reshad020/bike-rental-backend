import jwt from "jsonwebtoken";
import { TUser } from "../user/user.interface";
import User from "../user/user.model";
import { userSchema } from "../user/user.validation";
import config from "../../config";

const signupService = async (userData: TUser): Promise<TUser> => {
  const parsedData = userSchema.parse(userData);
  const existingUser = await User.findOne({ email: parsedData.email });
  if (existingUser) {
    throw new Error("Email is already in use");
  }
  const newUser = new User(parsedData);
  await newUser.save();

  return newUser;
};

const loginService = async (payload: { email: string; password: string }) => {
  const user = await User.findOne({ email: payload.email });
  if (!user) {
    throw new Error("This Email is not registered!");
  }
  const validatePassword = user.password === payload.password;
  if (!validatePassword) {
    throw new Error("Wrong Password!");
  }
  const jwtPayload = {
    userId: user?._id,
    role: user?.role,
  };
  const accessToken = jwt.sign(jwtPayload, config.jwt_access_token as string, {
    expiresIn: "1d",
  });
  return { user, accessToken };
};

export const authServices = { signupService, loginService };
