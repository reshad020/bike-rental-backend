import { TBike, TBikePartial } from "./bike.interface";
import Bike from "./bike.model";
import { bikeSchemaPartial, bikeValidationSchema } from "./bike.validation";

const createBikeIntoDb = async (bike: TBike) => {
  const validatedData = bikeValidationSchema.parse(bike);
  const newBike = await Bike.create(validatedData);
  return newBike;
};

const getBikesFromDb = async () => {
  const bikes = await Bike.find();
  if (bikes.length === 0) {
    throw new Error("No bikes Available");
  }
  return bikes;
};

const updateBikeIntoDb = async (id: string, update: TBikePartial) => {
  const validatedData = bikeSchemaPartial.parse(update);
  const updatedData = await Bike.findByIdAndUpdate(
    id,
    { $set: validatedData },
    { new: true }
  );
  return updatedData;
};
const deleteBikeIntoDb = async (id: string) => {
  const updatedData = await Bike.findByIdAndDelete(id);
  return updatedData;
};
export const bikeServices = {
  createBikeIntoDb,
  getBikesFromDb,
  updateBikeIntoDb,
  deleteBikeIntoDb,
};
