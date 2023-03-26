import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

const deleteProductById = asyncHandler(async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

const addProducts = asyncHandler(async (req, res) => {
  const {
    name,
    image,
    description,
    brand,
    category,
    price,
    countInStock,
    rating,
    numReviews,
  } = req.body;
  const product = await Product.create({
    name,
    image,
    description,
    brand,
    category,
    price,
    countInStock,
    rating,
    numReviews,
  });
  if (product) {
    res.status(201).json({
      name: product.name,
      image: product.image,
      description: product.description,
      brand: product.brand,
      category: product.category,
      proce: product.price,
      countInStock: product.countInStock,
      rating: product.rating,
      numReviews: product.numReviews,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

export { getProductById, getProducts,addProducts,deleteProductById };
