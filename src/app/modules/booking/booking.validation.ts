import mongoose from "mongoose";
import { z } from "zod";
export const BookingSchema = z.object({
  userId: z.instanceof(mongoose.Types.ObjectId),
  bikeId: z.instanceof(mongoose.Types.ObjectId),
  startTime: z.date(),
  returnTime: z.date().nullable().default(null).optional(),
  totalCost: z
    .number()
    .positive("Total cost must be a positive number")
    .optional(),
  isReturned: z.boolean().default(false).optional(),
});
