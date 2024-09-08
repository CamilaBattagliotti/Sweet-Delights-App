import { z } from "zod";

const ordersSchema = z.object({
  client: z
    .string({
      required_error: "El cliente es requerido",
    })
    .min(3, {
      message: "El cliente tiene que tener como MÍNIMO 3 caracteres",
    }),

  product: z
    .string({
      required_error: "El producto es requerido",
    })
    .min(1, {
      message: "El producto debe ser ingresado",
    }),

  quantity: z
    .number({
      required_error: "La cantidad es requerida",
      invalid_type_error: "La cantidad debe ser un numero",
    })
    .positive("El numero debe ser positivo"),

  price: z
    .number({
      required_error: "El precio es requerido",
      invalid_type_error: "El precio debe ser un numero",
    })
    .positive("El numero debe ser positivo"),
});

export function validateOrder(data) {
  return ordersSchema.safeParse(data);
}

const UpdateOrdersSchema = z.object({
  client: z
    .string({
      required_error: "El cliente es requerido",
    })
    .min(5, {
      message: "El cliente tiene que tener como MÍNIMO 5 caracteres",
    })
    .optional(),

  product: z
    .string({
      required_error: "El producto es requerido",
    })
    .min(1, {
      message: "El producto debe ser ingresado",
    })
    .optional(),

  quantity: z
    .number({
      required_error: "La cantidad es requerida",
      invalid_type_error: "La cantidad debe ser un numero",
    })
    .positive("El numero debe ser positivo")
    .optional(),

  price: z
    .number({
      required_error: "El precio es requerido",
      invalid_type_error: "El precio debe ser un numero",
    })
    .positive("El numero debe ser positivo")
    .optional(),
});

export function validateUpdatedOrder(data) {
  return UpdateOrdersSchema.safeParse(data);
}
