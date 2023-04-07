const Productos = require('../models/Productos');

//agregar un nuevo producto
exports.nuevoProducto = async (req,res,next) => {
  const producto = new Productos(req.body);
  try{
    //almacenar
    await producto.save();
    res.json({ mensaje: 'Se agrego un nuevo producto '});
  }
  catch(error){
    console.log(error)
    next();
  }
}

//traer todos los productos
exports.mostrarProductos = async (req,res,next) =>{
  try{
    const productos = await Productos.find({});
    res.json(productos);
  }
  catch(error){
    console.log(error)
    next();
  }
}


//traer un producto en especifico 
exports.mostrarProducto = async (req,res,next) => {
  try{
    const producto = await Productos.findById( req.params.idProducto);
    if(!producto){
      res.json({ mensaje:'Ese producto no existe '})
      next();
    }
    res.json(producto);
  }
  catch(error){
    console.log();
    next();
  }
}


//actualizar un producto
exports.actualizarProducto = async(req, res, next ) => {
  try{
    const prod = await Productos.findById(req.params.idProducto);
    if(!prod){
      res.json({ mensaje: `El producto con ese id no existe`})
      next();
    }
    const producto = await Productos.findOneAndUpdate({ _id: req.params.idProducto },
      req.body, {
        new : true
      });
      res.json(producto)
  }
  catch( error ){
    console.log(error)
    next();
  }
}

//eliminar un producto
exports.eliminarProducto = async (req,res,next) => {
  try{
    const prod = await Productos.findById(req.params.idProducto);
    if(!prod){
      res.json({ mensaje: `El producto  con ese id no existe`})
      next();
    }
    await Productos.findOneAndDelete({ _id: req.params.idProducto });
    res.json({ mensaje: 'El producto se ha eliminado'})
  }
  catch(error){
    console.log(error)
    next();
  }
}