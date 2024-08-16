import mongoose, { Model, Schema } from "mongoose";
import { TUser } from "./user.interface";

export const UserSchema: Schema<TUser> = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    role: { type: String, enum: ["admin", "user"], default: "user" },
  },
  { timestamps: true }
);

const User: Model<TUser> = mongoose.model("User", UserSchema);
export default User;
