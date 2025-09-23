import { z } from "zod";

export const contactFormSchema = z.object({
  user_name: z
    .string()
    .min(1, "El nombre es obligatorio")
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(50, "El nombre no puede exceder 50 caracteres")
    .regex(/[a-zA-ZáéíóúÁÉÍÓÚñÑ]/, "El nombre debe contener al menos una letra")
    .regex(
      /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s\-'.]+$/,
      "El nombre contiene caracteres no válidos"
    )
    .refine(
      (value) => !/^[\d\s\-'.]+$/.test(value),
      "El nombre debe contener letras, no solo números o símbolos"
    ),

  user_email: z
    .string()
    .min(1, "El email es obligatorio")
    .email("Por favor ingresa un email válido")
    .max(254, "El email es demasiado largo"),

  message: z
    .string()
    .min(1, "El mensaje es obligatorio")
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .max(1000, "El mensaje no puede exceder 1000 caracteres")
    .regex(/[a-zA-ZáéíóúÁÉÍÓÚñÑ]/, "El mensaje debe contener texto válido"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
