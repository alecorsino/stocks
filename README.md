# stocks

## Directorios

- `backend` Contien todo el codigo Express, API , Servidor del sitio estatico.

- `ui` Codigo Interfaz de Usuario (Angular).

## Docker
Es posible utilizar un Docker container con todo las dependencias instaladas en el.
Solo Hay que clonar este GIT repositorio, instalar Docker y 
Para iniciar el servidor backend, postgres y db admin en un container, correr: 

Abrir una terminal y correr:

#### INICIAR POSTGRES 

```
 docker-compose up db
```

El puerto por defecto de postgres `5432` esta expuesto para poder acceder desde afuera del container y administrar la DB con cualquier admin que quieran.
Si no , pueden usar el Admin de la seccion que sigue.

##### PGADMIN 4 (POSTRGRES )

```
 docker-compose up -d db-admin 
```
Ir a http://localhost:5000 y configurar la instancia de Postgress que corre en el container:

```
db: stocks
Superuser: stocks
password: stocker

```



#### INICIAR EL BACKEND (mode development)
```
 docker-compose up backend
```

El backend va a escuchar el dirctorio local mapeado como un volumne interno en el container y refrescar los cambios. `Iniciar primero la DB  si no iniciaron todo el sistema junto`


Para mas informacion ver `readme.md` en el directorio `backend`


#### INICIAR EL FRONT-END (mode development)

```
cd ui && ng serve --open
``` 

Tambien se puede iniciar:

`npm run ui` 


### Angular CLI 

Familiarizarce con angular cli https://cli.angular.io/


#### Todos los request a la API seran siguiend el patron `RESTful` al `api/[mi_servicio]/[123]`

Por ejemplo leer todos los Articulos (Ruta relativa):

`api/articulos`: Retorna una lista de Articulos en formato `JSON`.

`api/articulos/123`: Retorna el Articulo con ID `123` en formato `JSON`.

##### Ruta Absoluta

`http://localhost:7000/api/articulos`

-----

## Librerias externas y Preprocesadores

#### Font Awesome: http://fontawesome.io/
#### Lodash: https://lodash.com/
#### Stylus: http://stylus-lang.com/
#### Skeleton: http://getskeleton.com/

-----
### VSCode 
Plugins utiles:
* vscode-icons
* file-icons

### Otros programs utiles
*  POSTMAN https://www.getpostman.com/

## Security

https://nodesecurity.io/

https://enable-cors.org/index.html

https://expressjs.com/en/advanced/best-practice-security.html


