import z from "zod";

export const LoginSchema = z.object({
  email: z.email("Invalid email format"),
  password: z.string().min(1, "Password is required"),
});

export const RegisterSchema = z.object({
  email: z.email("Invalid email format"),
  password: z.string().min(6, "Minimum password length is 6 characters"),
  name: z.string().min(1, "Name is required"),
});
