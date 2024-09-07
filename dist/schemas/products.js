"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateProduct = validateProduct;
exports.validateUpdatedProduct = validateUpdatedProduct;
const zod_1 = require("zod");
const productsSchema = zod_1.z.object({
    type: zod_1.z
        .string({
        required_error: "Tipo de producto es requerido",
    })
        .min(5, {
        message: "El tipo de producto tiene que tener como MÍNIMO 5 caracteres",
    }),
    name: zod_1.z
        .string({
        required_error: "El nombre es requerido",
    })
        .min(1, {
        message: "El nombre debe ser ingresado",
    }),
    flavour: zod_1.z
        .string({
        required_error: "El sabor es requerido",
    })
        .min(1, {
        message: "El sabor debe ser indicado",
    })
        .optional(),
    filling: zod_1.z
        .string({
        required_error: "El relleno es requerido",
    })
        .min(1, {
        message: "El relleno debe ser indicado",
    }),
    complements: zod_1.z.string().optional(),
    price: zod_1.z
        .number({
        required_error: "El precio es requerido",
        invalid_type_error: "El precio debe ser un numero",
    })
        .positive("El numero debe ser positivo"),
});
function validateProduct(data) {
    return productsSchema.safeParse(data);
}
const UpdateProductsSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    type: zod_1.z
        .string({
        required_error: "El tipo es requerido",
    })
        .min(5, { message: "El tipo tiene que tener como MÍNIMO 5 caracteres" })
        .optional(),
    name: zod_1.z
        .string({
        required_error: "El nombre es requerido",
    })
        .min(1, {
        message: "El nombre debe ser ingresado",
    })
        .optional(),
    flavour: zod_1.z
        .string({
        required_error: "El sabor es requerido",
    })
        .min(1, {
        message: "El sabor debe ser indicado",
    })
        .optional(),
    filling: zod_1.z
        .string({
        required_error: "El relleno es requerido",
    })
        .min(1, {
        message: "El relleno debe ser indicado",
    })
        .optional(),
    complements: zod_1.z.string().optional(),
    price: zod_1.z
        .number({
        required_error: "El precio es requerido",
        invalid_type_error: "El precio debe ser un numero",
    })
        .positive("El numero debe ser positivo")
        .optional(),
});
function validateUpdatedProduct(data) {
    return UpdateProductsSchema.safeParse(data);
}
