import { z } from "zod";

const userSchema = z.object({
  name: z
    .string({
      required_error: "El nombre es requerido",
    })
    .min(3, { message: "El nombre debe tener mas de 3 caracteres" })
    .max(20, { message: "El nombre debe tener menos de 20 caracteres" })
    .optional(),
  email: z
    .string({
      required_error: "El email es requerido",
    })
    .email("El email ingresado tiene un formato invalido")
    .optional(),
});

export function validateUser(data) {
  return userSchema.safeParse(data);
}
