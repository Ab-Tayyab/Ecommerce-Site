import express from "express";
const router = express.Router();
import {
    getProducts,
    getProductById,
    addProducts,
    deleteProductById,
    updateProduct
}
from '../controller/productController.js'
router.route('/').get(getProducts)
router.route('/:id').get(getProductById).delete(deleteProductById).patch(updateProduct)
router.route('/addProduct').post(addProducts)

export default router