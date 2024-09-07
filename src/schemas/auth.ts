import { z } from "zod";

const signupSchema = z
  .object({
    name: z
      .string({
        required_error: "El nombre es requerido",
      })
      .min(3, { message: "El nombre debe tener mas de 3 caracteres" })
      .max(20, { message: "El nombre debe tener menos de 20 caracteres" }),
    email: z
      .string({
        required_error: "El email es requerido",
      })
      .email("El email ingresado tiene un formato invalido"),
    password: z
      .string({
        required_error: "La contrasena es requerida",
      })
      .min(6, { message: "La contrasena debe tener mas de 6 caracteres" }),
  })
  .strict();

export function validateSignup(data) {
  return signupSchema.safeParse(data);
}

const loginSchema = z
  .object({
    email: z
      .string({
        required_error: "El email es requerido",
      })
      .email("El email ingresado tiene un formato invalido"),
    password: z
      .string({
        required_error: "La contrasena es requerida",
      })
      .min(6, { message: "La contrasena debe tener mas de 6 caracteres" }),
  })
  .strict();

export function validateLogin(data) {
  return loginSchema.safeParse(data);
}
