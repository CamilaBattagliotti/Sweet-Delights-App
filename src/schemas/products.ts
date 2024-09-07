import { z } from "zod";

const productsSchema = z.object({
  type: z
    .string({
      required_error: "Tipo de producto es requerido",
    })
    .min(5, {
      message: "El tipo de producto tiene que tener como MÍNIMO 5 caracteres",
    }),

  name: z
    .string({
      required_error: "El nombre es requerido",
    })
    .min(1, {
      message: "El nombre debe ser ingresado",
    }),

  flavour: z
    .string({
      required_error: "El sabor es requerido",
    })
    .min(1, {
      message: "El sabor debe ser indicado",
    })
    .optional(),

  filling: z
    .string({
      required_error: "El relleno es requerido",
    })
    .min(1, {
      message: "El relleno debe ser indicado",
    }),

  complements: z.string().optional(),

  price: z
    .number({
      required_error: "El precio es requerido",
      invalid_type_error: "El precio debe ser un numero",
    })
    .positive("El numero debe ser positivo"),
});

export function validateProduct(data) {
  return productsSchema.safeParse(data);
}

const UpdateProductsSchema = z.object({
  id: z.string().optional(),

  type: z
    .string({
      required_error: "El tipo es requerido",
    })
    .min(5, { message: "El tipo tiene que tener como MÍNIMO 5 caracteres" })
    .optional(),

  name: z
    .string({
      required_error: "El nombre es requerido",
    })
    .min(1, {
      message: "El nombre debe ser ingresado",
    })
    .optional(),

  flavour: z
    .string({
      required_error: "El sabor es requerido",
    })
    .min(1, {
      message: "El sabor debe ser indicado",
    })
    .optional(),

  filling: z
    .string({
      required_error: "El relleno es requerido",
    })
    .min(1, {
      message: "El relleno debe ser indicado",
    })
    .optional(),

  complements: z.string().optional(),

  price: z
    .number({
      required_error: "El precio es requerido",
      invalid_type_error: "El precio debe ser un numero",
    })
    .positive("El numero debe ser positivo")
    .optional(),
});

export function validateUpdatedProduct(data) {
  return UpdateProductsSchema.safeParse(data);
}
