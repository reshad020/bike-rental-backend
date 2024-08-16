import { z } from "zod";
export const userSchema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.string().email("Invalid email address."),
  password: z.string().min(6, "Password must be at least 6 characters long."),
  phone: z.string().regex(/^\d+$/, "Phone number should contain only digits."),
  address: z.string().min(1, "Address is required."),
  role: z.enum(["admin", "user"]),
});
export const userSchemaPartial = userSchema.partial();
