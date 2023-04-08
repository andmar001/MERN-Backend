const Pedidos = require("../models/Pedidos");

// agrega un nuevo pedido
exports.nuevoPedido = async (req, res, next) => {
  const pedido = new Pedidos(req.body);
  try {
    // almacenar el registro
    await pedido.save();
    res.json({ mensaje: "Se agregó un nuevo pedido" });
  } catch (error) {
    console.log(error);
    next(); //pasar al siguiente middleware, sin detener la ejecución
  }
}

// muestra todos los pedidos
exports.mostrarPedidos = async (req, res, next) => {
  try {
    const pedidos = await Pedidos.find({})
      .populate('cliente')
      .populate({
        path: 'pedido.producto',
        model: 'Productos'
      })

      res.json(pedidos);
  } 
  catch (error) {
    console.log(error);
    next();
  }
}

