import { z } from "zod";
import { userSchema, userSchemaPartial } from "./user.validation";
export type TUser = z.infer<typeof userSchema>;
export type TUserPartial = z.infer<typeof userSchemaPartial>;
