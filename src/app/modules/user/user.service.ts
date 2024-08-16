import { TUserPartial } from "./user.interface";
import User from "./user.model";
import { userSchemaPartial } from "./user.validation";

const getUserProfile = async (id: string) => {
  const user = await User.findById(id);
  if (!user) {
    throw new Error("No user Found!");
  }
  return user;
};

const updateProfile = async (id: string, update: TUserPartial) => {
  const validatedData = userSchemaPartial.parse(update);
  const updatedData = await User.findByIdAndUpdate(
    id,
    { $set: validatedData },
    { new: true }
  );
  if (!updatedData) {
    throw new Error("No user Found");
  }
  return updatedData;
};
export const userServices = { getUserProfile, updateProfile };
