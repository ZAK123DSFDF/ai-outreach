import { z } from "zod";

export function getAuthSchema() {
  return z.object({
    email: z
      .string()
      .min(1, { message: "Required" })
      .email({ message: "Invalid email" }),
    password: z.string().min(1, { message: "Required" }).min(6, {
      message: "Password too short",
    }),
  });
}
