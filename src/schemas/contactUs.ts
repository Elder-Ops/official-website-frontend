import { z } from "zod";

export const contactSchema = z
  .object({
    firstName: z.string().min(2, "First name is required"),
    lastName: z.string().min(2, "Last name is required"),
    email: z
      .email({
        message: "Invalid email address",
      })
      .min(1, "Email is required"),

    message: z.string().min(10, "Message must be at least 10 characters"),
  })
  .strict();

export type ContactFormData = z.infer<typeof contactSchema>;
