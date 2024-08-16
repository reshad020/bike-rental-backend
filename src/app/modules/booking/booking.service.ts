import mongoose from "mongoose";
import Booking from "./booking.model";
import { BookingSchema } from "./booking.validation";
import { TBooking } from "./booking.interface";
import Bike from "../bike/bike.model";
import { calculateRentalCost } from "../../utils/calculateRentalCost";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createBookingIntoDb = async (
  userId: mongoose.Types.ObjectId,
  bookingDetail: TBooking
) => {
  const validatedBooking = BookingSchema.parse(bookingDetail);
  const bike = await Bike.findById(validatedBooking.bikeId);
  if (!bike) {
    throw new Error("No bike Found with this Id");
  }
  const newBooking = await Booking.create({
    userId,
    bikeId: validatedBooking.bikeId,
    startTime: validatedBooking.startTime,
    totalCost: 0,
    isReturned: false,
  });
  if (!newBooking) {
    throw new Error("Failed to create New Booking");
  }
  return newBooking;
};

const updateBikeReturnIntoDb = async (bookingId: string) => {
  const bookingDetail = await Booking.findById(bookingId);
  const bikeDetail = await Bike.findById(bookingDetail?.bikeId);
  const updateBooking = await Booking.findByIdAndUpdate(
    bookingId,
    {
      $set: {
        returnTime: new Date(),
        isReturned: true,
        totalCost: calculateRentalCost(
          bookingDetail?.startTime as Date,
          bikeDetail?.pricePerHour as number
        ),
      },
    },
    { new: true }
  );
  return updateBooking;
};

const getBookingFromDb = async (userId: string) => {
  const userBookings = await Booking.find({ userId: userId });
  if (userBookings.length === 0) {
    throw new Error("No bookings yet!");
  }
  return userBookings;
};

export const bookingServices = {
  createBookingIntoDb,
  updateBikeReturnIntoDb,
  getBookingFromDb,
};
