const ProductRepository = require("../repositories/productRepository");
const UserRepository = require("../repositories/userRepository");
const sendMail = require('../repositories/sendMail')
let getProducts = (req, res) => {
  ProductRepository.getAllProducts((products) => {
    res.status(200).json(products);
  });
};




let addProduct = (req, res) => {
  ProductRepository.addProduct(req.body, () => {
    res.status(200).json({
      message: "Producto registrado correctamente",
    });
  });
};

let updateAProduct = (req, res) => {
  ProductRepository.updateProduct(req.body  , () => {
    res.status(200).json({
      message: "Producto actualizado correctamente",
    });
  });
};

let deleteAProduct = (req, res) => {
  ProductRepository.deleteProduct(req.query.id  , () => {
    res.status(200).json({
      message: "Producto eliminado correctamente",
    });
  });
};

let comprarProducto = (req, res) => {
  const usuarioId = req.body.usuarioId; // Suponiendo que el ID del usuario se pasa en el cuerpo de la solicitud
  const productoId = req.body.productoId; // Suponiendo que el ID del producto se pasa en el cuerpo de la solicitud
  const cantidad = req.body.cantidad; // Suponiendo que la cantidad se pasa en el cuerpo de la solicitud

  UserRepository.comprarProducto(usuarioId, productoId, cantidad, () => {
      // Envía un correo de confirmación al usuario
      const asuntoCorreo = 'Compra realizada';
      const contenidoCorreo = 'Gracias por tu compra. Detalles de la compra: ...'; // Ajusta el contenido del correo según tus necesidades

      sendMail.enviarCorreo(usuarioId, asuntoCorreo, contenidoCorreo);

      res.status(200).json({
        message: "Compra realizada con éxito",})
    
  });
};

module.exports = {
  getProducts,
  addProduct,
  updateAProduct,
  deleteAProduct,
  comprarProducto
};
