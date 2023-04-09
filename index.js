const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");  // Parsear el body de las peticiones - fundamental para poder leer los datos que vienen en el body de las peticiones

// conectar mongo 
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/restapis",{
  useNewUrlParser: true,
});

// Create server
const app = express();

// Habilitar body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//rutas de la app
app.use("/", routes());

// Create port 
const port = 5000;

app.listen(port);




