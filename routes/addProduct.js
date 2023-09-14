const express = require('express');
const productController = require('../controllers/product-controller');
const router = express.Router();
// Ruta para agregar un producto. Requiere autenticación JWT de administrador.
router.post('/', productController.addProduct, );

module.exports = router; 