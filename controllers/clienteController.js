const Clientes = require('../models/Clientes');

// agrega un nuevo cliente
exports.nuevoCliente = async (req,res,next)=>{
  const cliente = new Clientes(req.body);
  try{
    // almacenar el registro
    await cliente.save();
    res.json({ mensaje: 'Se agregó un nuevo cliente' });
  }
  catch(error){
    console.log(error);
    next(); //pasar al siguiente middleware, sin detener la ejecución
  }
}

// muestra todos los clientes 
exports.mostrarClientes = async (req,res,next)=>{
  try{
    const clientes = await Clientes.find({});
    res.json(clientes);
  }
  catch(error){
    console.log(error);
    next();
  }
}

//un cliente en especifico
exports.mostrarCliente = async (req,res,next)=>{
  const cliente = await Clientes.findById(req.params.idCliente);
  try{
    if(!cliente){
      res.json({mensaje: 'Ese cliente no existe'});
      next();
    }
    //mostrar el cliente
    res.json(cliente);
  }
  catch(error){
    console.log(error);
    next();
  }
}