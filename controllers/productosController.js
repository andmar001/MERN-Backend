const Productos = require('../models/Productos');

const multer = require('multer');
const shortid = require('shortid');

const configuracionMulter = {
  storage: fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, __dirname+'../../uploads/')
    },
    filename: (req, file, cb) => {
      const extension = file.mimetype.split('/')[1];
      cb(null, `${shortid.generate()}.${extension}`)  //genera un id unico
    }
  }),
  fileFilter (req, file, cb) {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){  //validar el formato de la imagen
      cb(null, true)
    }else{
      cb(new Error('Formato no valido'), false)
    }
  }
}

//pasar la configuracion y el campo
const upload = multer(configuracionMulter).single('imagen');   //mismo campo que en el modelo

//sube un archivo
exports.subirArchivo = (req, res, next) => {
  upload(req, res, function(error){
    if(error){
      res.json({ mensaje: error})
    }
    return next();
  })
}

//agregar un nuevo producto
exports.nuevoProducto = async (req,res,next) => {
  const producto = new Productos(req.body);
  try{
    //si hay imagen
    if(req.file.filename){
      producto.imagen = req.file.filename;
    }
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