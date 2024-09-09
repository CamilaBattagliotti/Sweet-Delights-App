<h1 align="center"> Sweet Delights </h1>

Sweet Delights es una API para la gestión de tortas, cupcakes y otros postres.
La idea nació con el objetivo de crear una herramienta práctica para emprendedores en el ámbito de la repostería, como una amiga cercana. Esta aplicación permite a los usuarios gestionar sus productos y pedidos de manera sencilla y efectiva, facilitando la administración de su negocio.

<p align="center">
<img src="https://media1.tenor.com/m/BOMrzW02VW0AAAAC/cupcakes-dessert.gif" alt="INTRO" width="300">
</p>

## 📌Vision General

La API está diseñada para administrar un catálogo de tortas, cupcakes y otros postres, permitiendo a los usuarios llevar a cabo operaciones como la obtencion, creación, actualización y eliminación de productos y pedidos.

Para la construccion de esta API REST se utilizo Node.js, y dependencias como Express, UUID, Zod y Jsonfile. La aplicación está desarrollada en Typescript y está desplegada en Render y accesible desde el siguiente enlace: https://sweet-delights.onrender.com

Los datos de los productos, pedidos y usuarios se encuentran en bases de datos en formato json, con un archivo auth.json que contiene los datos de los usuarios encriptados para proteger informacion sensible.

## 📌Instrucciones de uso:

Las funciones disponibles son:

🧁**Productos y pedidios:**

- Obtener _todos los productos_ disponibles:

```
GET /products
```

- Buscar productos _por tipo_ por ej. tortas, cupcakes, etc.

```
GET /products?type=cup
```

- Buscar un producto _por ID_.

```
GET /products/id
```

- _Crear_ un nuevo producto en la base de datos.

```
POST /products
```

Ejemplo del body de la solicitud:

```
   {
   "type": "cupcakes",
   "name": "Fletch",
   "flavour": "Marmolado",
   "filling": "Ganache de chocolate blanco",
   "complements": "Toppers"
    }

```

- _Actualizar_ la información de un producto específico usando su ID.

```
PATCH /products/id
```

Ejemplo del body de la solicitud:

```
{
"name": "Postre"
}
```

- _Eliminar_ un producto de la base de datos utilizando su ID.

```
DELETE /products/id
```

🧁**Gestión de pedidos**: Puedes realizar las mismas acciones para los pedidos, reemplazando "products" por "orders":

- Obtener la lista de _todos los pedidos_:

```
GET /orders
```

- Buscar pedidos _por cliente_:

```
GET /orders?client=Martina
```

- Buscar un pedido _por ID_.

```
GET /orders/id
```

- _Crear_ un nuevo pedido en la base de datos.

```
POST /orders
```

Ejemplo del body del pedido:

```
    {
      "client": "Matias",
      "product": "postre rogel",
      "quantity": 1,
      "price": 30000
    }

```

- _Actualizar_ la información de un pedido específico usando su ID.

```
PATCH /orders/id
```

Ejemplo del body del pedido:

```
{
 "product": "cupcakes frozen",
  "price": 75000
}
```

- _Eliminar_ un pedido de la base de datos utilizando su ID.

```
DELETE /orders/id
```

🧁**Registro y autenticación**. Los usuarios deben registrarse y autenticarse para acceder a las funcionalidades de productos y pedidos.

- Registro:

```
POST /auth/signup
```

Ejemplo de la solicitud:

```
{
"name": "Taylor"
"email": "taylor@gmail.com",
"password": "taylor123"
}
```

- Login:

```
POST /auth/login
```

Ejemplo de la solicitud:

```
{
"email": "taylor@gmail.com",
"password": "taylor123"
}
```

- Logout:

Ejemplo de la solicitud:

```
POST /auth/logout
```

🧁**Gestion de usuarios**. Pueden obtener y modificar los datos de email y nombre de usuario accediendo desde el ID del usuario ya registrado:

- Buscar un usuario _por ID_.

```
GET /users/id
```

- _Actualizar_ la información de un usuario específico usando su ID.

```
PATCH /users/id
```

Ejemplo del body:

```
{
 "name": "Taylor Swift"
}
```

🧁**Token:**

❗Para acceder a algunos recursos sera necesario contar con **TOKEN** que sera provisto al Registrarse como usuario y luego del Login.

La solicitud llevara en esos casos el token al final de la ruta requerida:

```
GET /products/id?token="token obtenido"
```

## 📌Contacto

Para cualquier consulta o soporte, puedes contactarnos en: [soporte@sweet-delights.com](mailto:soporte@sweet-delights.com).

---

🤓Autor: Camila Battagliotti
