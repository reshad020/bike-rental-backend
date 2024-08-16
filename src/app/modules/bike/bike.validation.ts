import { z } from "zod";

export const bikeValidationSchema = z.object({
  name: z.string(),
  description: z.string(),
  pricePerHour: z.number().positive("Price per hour must be a positive number"),
  isAvailable: z.boolean().default(true),
  cc: z.number().positive("Engine capacity must be a positive number"),
  year: z
    .number()
    .int()
    .min(1900, "Year must be at least 1900")
    .max(new Date().getFullYear(), "Year cannot be in the future"),
  model: z.string(),
  brand: z.string(),
});
export const bikeSchemaPartial = bikeValidationSchema.partial();
