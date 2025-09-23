import { z } from "zod";

export const contactSchema = z.object({
  user_name: z
    .string()
    .min(1, "El nombre es requerido")
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(50, "El nombre no puede exceder 50 caracteres")
    .regex(
      /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/,
      "El nombre solo puede contener letras y espacios"
    )
    .transform((val) => val.trim()),

  user_email: z
    .string()
    .min(1, "El email es requerido")
    .email("Debe ser un email válido")
    .max(100, "El email no puede exceder 100 caracteres")
    .transform((val) => val.trim().toLowerCase()),

  message: z
    .string()
    .min(1, "El mensaje es requerido")
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .max(1000, "El mensaje no puede exceder 1000 caracteres")
    .transform((val) => val.trim()),
});

export type ContactFormData = z.infer<typeof contactSchema>;
