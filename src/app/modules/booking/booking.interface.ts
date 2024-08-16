import { z } from "zod";
import { BookingSchema } from "./booking.validation";
export type TBooking = z.infer<typeof BookingSchema>;
