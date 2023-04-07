# instalaciones
npm i --save express nodemon

# Arrancar el servidor - definir el script en el package.json
npm start
nodemon server

# instalacion de monfoDB
npm i --save mongoose

# instalacion de mongo
crear carpeta de mongo
- colocar el archivo mongod.exe dentro de las variables de entorno
- crear carpeta data/db  dentro de la carpeta de mongo
con el comando 
md data\db
- arrancar el servidor de mongo
mongod

# instalacion de mongoose
npm i --save mongoose

# multer - subir archivos
# shortid - generar id unicos
npm i --save shortid multer

- para subir una imagen desde postman lo hacemos en el tap de body, form-data, elegimos el tipo file y le damos un nombre, en este caso es imagen, y le damos el valor de la imagen que queremos subir