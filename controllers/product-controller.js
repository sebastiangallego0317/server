const ProductRepository = require('../repositories/productRepository');

let getProducts = (req, res) => {

      ProductRepository.getAllProducts(products => {
    res.status(200).json(products);
  });
     
}

let addProduct = (req, res) => {

  ProductRepository.addProduct(product ,() => {
res.status(200).json({
  message : "Producto registrado correctamente"
});
});
 
}


module.exports = {
  getProducts,
  addProduct
}
