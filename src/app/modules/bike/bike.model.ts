import mongoose, { Model, Schema } from "mongoose";
import { TBike } from "./bike.interface";

const BikeSchema: Schema<TBike> = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  pricePerHour: { type: Number, required: true },
  isAvailable: { type: Boolean, default: true },
  cc: { type: Number, required: true },
  year: { type: Number, required: true },
  model: { type: String, required: true },
  brand: { type: String, required: true },
});

const Bike: Model<TBike> = mongoose.model("Bike", BikeSchema);
export default Bike;
