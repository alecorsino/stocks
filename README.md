# stocks

## Directorios

- `backend` Contien todo el codigo Express, API , Servidor del sitio estatico.

- `ui` Codigo Interfaz de Usuario (Angular).


## Prerequisitos
- Nodejs: 8.9.3 Verficar con:

`node --version`

- Gulp CLI version 1.4.x o mas grande. Verficar con: `gulp -v`


`npm install --global gulp-cli`


## Preparar codigo para empezar desarrollo
----

* #### Instalar todos los paquetes Node en el root dir del projecto

`npm install`

* #### Correr setup del projecto

`npm run setup`


## Desarrollo

* ##### Iniciar el servidor de API `(backend)`. 

`npm run server`

El servidor escucha en la direccion `http://localhost:4000`

* #### Todos los request a la API seran siguiend el patron `RESTful` al `api/[mi_servicio]/[123]`

Por ejemplo leer todos los Articulos (Ruta relativa):

`api/articulos`: Retorna una lista de Articulos en formato `JSON`.

`api/articulos/123`: Retorna el Articulo con ID `123` en formato `JSON`.

##### Ruta Absoluta

`http://localhost:4000/api/articulos`


## Docker

CONFIGURAR DOECK !!!!

## VSCode 
Plugins utiles:
* vscode-icons
* file-icons

### Otros programs utiles
*  POSTMAN https://www.getpostman.com/
