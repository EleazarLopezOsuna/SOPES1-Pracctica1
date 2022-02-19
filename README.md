# Componentes del sistema

## Arquitectura
![arquitectura](https://raw.githubusercontent.com/racarlosdavid/Code_SO1/Clase_4/Img/arquitectura.png)

## Frontend
Para la realizacion del frontend se utilizo el framework de React. Este componente de nuestro sistema es el que se presenta al usuario final el cual puede acceder a el por medio de cualquier dispositivo con conexion a internet. Este a su vse comunica con el servidor mandando peticiones y recibiendo informacion.

## Backend
Para la realizacion del backend se utilizo Go el cual tiene comunicacion tanto con el frontend como con la base de datos. El flujo de los procesos por parte del backend es la siguiente:
- Recibe peticiones del frontend por medio de dos end points los cuales indican los procesos a ejecutar (insercion y lectura)
- Cuando el backend recibe las peticiones en los end points procede a realizar las peticiones a la base de datos.
- Luego de hacer las peticiones, la base de datos responde con un JSON el cual es enviado como una respuesta hacia el frontend

## Base de datos
La base de datos fue desarrollada en Mongodb en la cual se tiene una colleccion llamada operaciones en la que almacenaremos documentos con la siguiente informacion:
- **Left**: hace referencia al operando izquierdo
- **Right**: hace referencia al operando derecho
- **Operator**: hace referencia a la operacion a realizar
- **Result**: hace referencia al resultado de la operacion
- **CreatedAt**: hace referencia al momento en el que se realiza la operacion

# Manual de usuario
La aplicacion de usuario tiene un funcionamiento muy simple.
Al momento de ingresar a la aplicacion tendremos la siguiente vista
![aplicacion](https://drive.google.com/uc?export=view&id=1Jx_hsc5l34c5OTCb94Lv6F-vIsgH2W8N)

## Explicacion de los componentes dentro de la aplicacion
![componentes](https://drive.google.com/uc?export=view&id=1h06G0O3i6dTlpYWH5sdbG3jbsCWKGPSN)
- Las flechas de color **rojo** son inputs para poder ingresar numeros
- La flecha de color **verde** es un select que nos permite seleccionar los distintos operadores que podemos utilizar
- La flecha de color **azul** es un boton el cual al momento de ser presionado manda la informacion hacia el servidor para que pueda ser procesada

# Manual tecnico
## Estructura de los componentes
### Frontend
El frontend esta compuesto de la siguiente manera.
- **frontend**: directorio principal, contiene los archivos de configuracion de react, docker y nginx.
    - **public**: dentro de este directorio encontramos los archivos de acceso publico.
    - **src**: este directorio es el encargado de almacenar los componentes de react.
        - **components**: subdirectorio de src quealmacena los archivos necesarios para generarlos siguientes componentes:
            - Form
            - Header
            - OperationItem
            - OperationList
        - **entities**: en este directorio se almacena el objeto operacion el cual es enviado hacia el servidor.
### Backend
La estructura de los archivos dentro del backend es la siguiente
- **Backend**: directorio principal, contiene los archivos de configuracion de go, tambien estan los archivos de dependencias de go y los archivos de configuracion de docker.
    - **database**: Dentro de este directorio esta el archivo para configurar la conexion con mongodb
    - **models**: Directorio para almacenar los modelos utilizados (operacion)
    - **repositories**: Dentro de este directorio se encuentran los directorios para ejecutar las peticiones recibidas en los end points
    - **services**: Dentro de esta carpeta esta el archivo que actua como primer capa luego de recibir las peticiones, tambien se encuentra un archivo de test el cual comprueba que las operaciones de insercion y lectura esten funcionando correctamente

## Instalacion
Para la instalacion de la app por medio de contenedores se necesitan las siguientes herramientas:
- Docker
- Docker compose
### Modos de instalacion
#### Docker images
1. Primero necesitamos obtener las imagenes a utilizar
```
docker pull mongo
docker pull jaredosuna/backend_p1_201700893
docker pull jaredosuna/frontend_p1_201700893
```
2. Debemos de iniciar la imagen de mongo
```
docker run -d -p 27017:27017 --name dbmongo \
    -v /home/volume:/data/db \
    -e MONGO_INITDB_ROOT_USERNAME=username \
    -e MONGO_INITDB_ROOT_PASSWORD=password \
    mongo 
```
3. Debemos de iniciar la imagen de backend
```
docker run -d -p 12345:12345 --name backend \
	jaredosuna/backend_p1_201700893
```
4. Debemos de iniciar la imagen de frontend
```
docker run -d -p 80:80 --name frontend \
	jaredosuna/frontend_p1_201700893
```
#### Docker compose
1. Primero necesitamos crear un archivo con el nombre `docker-compose.yml`
```
nano docker-compose.yml
```
2. Escribir el siguiente codigo dentro del archivo que creamos
```
version: "3.9"
services:
  database_p1:
    image: mongo
    container_name: mongodb_p1
    environment:
      MONGO_INITDB_ROOT_USERNAME: sistemasOperativos1
      MONGO_INITDB_ROOT_PASSWORD: 1234
    ports:
      - "27017:27017"
    restart: always
    volumes:
      - '/home/eleazarjlopezo/volume:/data/db'
    networks:
      - practica1-net

  backend_p1:
    image: jaredosuna/backend_p1_201700893
    container_name: backend_p1
    ports:
      - "12345:12345"
    restart: always
    depends_on:
      - database_p1
    networks:
      - practica1-net

  frontend_p1:
    image: jaredosuna/frontend_p1_201700893
    container_name: frontend_p1
    ports:
      - "80:80"
    restart: always
    depends_on:
      - backend_p1
    networks:
      - practica1-net

networks:
  practica1-net:
    name: "practica1-net"
```
4. Hacemos un up de nuestro docker compose
```
docker-compose up -d
```