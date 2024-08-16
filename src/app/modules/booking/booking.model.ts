import mongoose, { Model, Schema } from "mongoose";
import { TBooking } from "./booking.interface";

const BookingSchema: Schema<TBooking> = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  bikeId: { type: Schema.Types.ObjectId, ref: "Bike", required: true },
  startTime: { type: Date, required: true },
  returnTime: { type: Date, default: null },
  totalCost: { type: Number, required: true, default: 0 },
  isReturned: { type: Boolean, default: false },
});

const Booking: Model<TBooking> = mongoose.model("Booking", BookingSchema);
export default Booking;
