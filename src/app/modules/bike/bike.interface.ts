import { z } from "zod";
import { bikeSchemaPartial, bikeValidationSchema } from "./bike.validation";
export type TBike = z.infer<typeof bikeValidationSchema>;
export type TBikePartial = z.infer<typeof bikeSchemaPartial>;
