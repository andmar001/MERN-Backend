const express = require("express");
const router = express.Router();

const clienteController = require("../controllers/clienteController");
const productosController = require("../controllers/productosController");
const pedidosController = require("../controllers/pedidosController");

module.exports = function() {

  // ?CLIENTES
  // Agrega nuevos clientes via POST
  router.post("/clientes", clienteController.nuevoCliente )

  //Obtener todos los clientes
  router.get("/clientes", clienteController.mostrarClientes )

  //Obtener un cliente en especifico (ID)
  router.get("/clientes/:idCliente", clienteController.mostrarCliente )
  
  //Actualizar un cliente en especifico (ID)
  router.put("/clientes/:idCliente", clienteController.actualizarCliente )

  //eliminar un cliente en especifico (ID)
  router.delete("/clientes/:idCliente", clienteController.eliminarCliente )

  // ?PRODUCTOS
  // Agrega nuevos productos via POST
  router.post("/productos", 
    productosController.subirArchivo,   // 1. Sube el archivo
    productosController.nuevoProducto ) // 2. Agrega el producto

  //Obtener todos los productos
  router.get("/productos", productosController.mostrarProductos )

  //Obtener producto by id
  router.get("/productos/:idProducto", productosController.mostrarProducto )

  //Actualizar un producto
  router.put("/productos/:idProducto", 
    productosController.subirArchivo,   // 1. Sube el archivo
    productosController.actualizarProducto ) // 2. Actualiza el producto
  
  //Eliminar un producto
  router.delete("/productos/:idProducto", productosController.eliminarProducto )

  //buscar producto por id pero con post
  router.post("/productos", productosController.buscarProducto )

  // ?PEDIDOS
  // Agrega nuevos pedidos via POST
  router.post("/pedidos", pedidosController.nuevoPedido )
  
  return router;

}