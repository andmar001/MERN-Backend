const express = require("express");
const router = express.Router();

const clienteController = require("../controllers/clienteController");

module.exports = function() {

  // Agrega nuevos clientes via POST
  router.post("/clientes", clienteController.nuevoCliente )

  //Obtener todos los clientes
  router.get("/clientes", clienteController.mostrarClientes )

  //Obtener un cliente en especifico (ID)
  router.get("/clientes/:idCliente", clienteController.mostrarCliente )
  
  //Actualizar un cliente en especifico (ID)
  router.put("/clientes/:idCliente", clienteController.actualizarCliente )

  return router;

}