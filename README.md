# MELI Test - Johan Vargas

Es una prueba de desarrollo para aspirar a ingresar como desarrollador fullstack a mercadolibre.

## Tech Stack

**Clientr:** React, SASS (Con BEM), Typescript, Vite

**Servidor:** Node, Express

## Run Locally

Clona el proyecto

```bash
  git clone https://github.com/johanjaguardev/meli-test.git
```

En el directorio del proyecto, vamos a instalar y correr las aplicaciones de servidor y de cliente

Servidor

```bash
  cd api
  npm install
  npm run dev
```

Cliente

```bash
  cd frontend
  npm install
  npm run start
```

## Roadmap

- Crear una API basica con node.js y Express
- Crear el API - Simulando datos reales con Mocks

  - Crear datos mockeados y guardarlos en "api/data/store.json"
  - Leer los datos en node para el endpoint “/” y testearlos con postman (todos los registros de la base de datos)
  - Crear el request para leer segun el campo "id" con el endpoint “/items/:id”
  - Agregar el endpoint "/items/:id/description" para leer el item con id
  - Crear el endpoint “/items?search=”
  - Llenar el campo categorias en cada uno de los endpoints
  - Limitar los resultados arrojados por los endpoint "/" y “/items?search=” para arrojar los 4 primeros resultados

- Crear una aplicacion del lado del cliente con "React + Typescript" y apoyandonos en "Vite"
  - Crear primer aplicacion por defecto
  - Crear primer componente en React
  - Implementar React Router v.6 con tareas basicas
  - Implementar algunas reglas basicas de CSS con SASS
  - Crear componentes Searchbar, Results y Details
  - Comunicar los props desde Searchbar hacia Results y Detail
  - Crear una clase Store con las funciones para conectar la aplicacion de cliente con el backend en la url "/frontend/src/store/store.tsx"
  - Crear primer componente Home con la busqueda inicial "/" que trae todos los resultados de la DB
  - Crear componente Item con su interface asociada
  - Modificar el componente Results con el query leido desde el componente Searcbox e imprimir los resultados implementando el componente Item
  - Modificar el componente Detail e implementar el componente Item creado anteriormente
  - Crear el componente Breadcumb
  - Agregar las JSON Signature a traves de los headers del request en el lado del cliente y leerlos desde el backend despues y exponerlo en cada enpoint
- Refinamiento de CSS
  - Searchbar Pixel Perfect CSS
  - Detail Pixel Perfect CSS
  - Breadcumb Pixel Perfect CSS
  - Results Pixel Perfect CSS
- Nuevos Features
  - Feature: Agregar una accion de redireccion a la tecla enter en el componente Searchbar
  - Feature: Crear un componente 404 para las busquedas que no estan incluidas en los endpoint y crear su respectivo css
  - Feature: Habiltar / Inhabilitar boton de busqueda si existe texto tipeado en Searchbar o no
  - Feature: Dar titulo a la aplicacion "MELI Test Johan Vargas"
- Bugfix
  - Bug 0: La carga de la imagen esta fallando (Solucionado)
  - Bug 1: Inicialmente la redireccion en SearchBar se hizo con window.location.href, cambiar por su alternativa de react (useNavigate Hook) (Solucionado)
  - Bug 2: Solucionar Warning ->"Each child in a list should have a unique "key" prop. - Check the render method of `Results`". (Solucionado)
  - Bug 3: Outline negro en el componente SearchBox. (Solucionado)
  - Bug 4: Alineacion de decimales en el campo precio en el componente de Detail
  - Bug 5: Manejo de alturas de los divs y anchos (Solucionado)
  - Bug 6: Formato de moneda para los campos de precio en el componente Item (Solucionado)
  - Bug 7: Al hacer una busqueda que arroja 1 solo campo y tratar de volver al home se presenta error. (Solucionado)
  - Bug 8: No hay mensaje en caso de que una busqueda no arroje resultados (Solucionado)
  - Bug 9: La linea que separa los items en la vista de Results no deberia verse para el ultimo item (Solucionado)
  - Bug 10: Conservar el valor de parametro de la query en el input de SearchBar component (Solucionado)

## Optimizaciones

En este punto me gustaria generar mas test unitarios, asi como dar un enfoque a la usabilidad mas profundo.

## Feedback

Si me sugieren algun tipo de feedback estoy abierto a recibirlo, mi correo electronico es johanvargasdev@gmail.com
