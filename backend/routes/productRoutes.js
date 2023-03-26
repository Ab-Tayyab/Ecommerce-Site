import express from "express";
const router = express.Router();
import {
    getProducts,
    getProductById,
    addProducts,
    deleteProductById
}
from '../controller/productController.js'
router.route('/').get(getProducts)
router.route('/:id').get(getProductById)
router.route('/:id').delete(deleteProductById)
router.route('/addProduct').post(addProducts)

export default router