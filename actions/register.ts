"use server";

import { LoginSchema, RegisterSchema } from "@/schemas";
import z from "zod";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success)
    return {
      error: "Invalid input",
    };

  return {
    success: "Email sent!",
  };
};
