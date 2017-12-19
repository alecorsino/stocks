# stocks

## Directorios

- `backend` Contien todo el codigo Express, API , Servidor del sitio estatico.

- `ui` Codigo Interfaz de Usuario (Angular).

## Docker
Es posible utilizar un Docker container con todo las dependencias instaladas en el.
Solo Hay que clonar este GIT repositorio, instalar Docker y 
Para iniciar el servidor backend en un container, correr: 

Abrir una terminal y correr:

```
 docker-compose up
```

El backend va a escuchar el dirctorio local mapeado como un volumne interno en el container y refrescar los cambios.


Para mas informacion ver `readme.md` en el directorio `backend`

Otra alternativa es instalar todoas las depndencias locales decribidas en las secciones contiguas

-----------
## Sin usar `Docker`. Prerequisitos:
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
-----

#### Iniciar el servidor de API `(backend)`. 

`npm run server`

El servidor escucha en la direccion `http://localhost:4000`

#### Iniciar  UI con live reload.

`npm run ui`


#### Todos los request a la API seran siguiend el patron `RESTful` al `api/[mi_servicio]/[123]`

Por ejemplo leer todos los Articulos (Ruta relativa):

`api/articulos`: Retorna una lista de Articulos en formato `JSON`.

`api/articulos/123`: Retorna el Articulo con ID `123` en formato `JSON`.

##### Ruta Absoluta

`http://localhost:4000/api/articulos`



-----
### VSCode 
Plugins utiles:
* vscode-icons
* file-icons

### Otros programs utiles
*  POSTMAN https://www.getpostman.com/
