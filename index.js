const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");

// conectar mongo 
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/restapis",{
  useNewUrlParser: true,
});

// Create server
const app = express();

//rutas de la app
app.use("/", routes());

// Create port 
const port = 3000;

app.listen(port);




