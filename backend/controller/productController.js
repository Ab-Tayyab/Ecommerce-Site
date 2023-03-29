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

const updateProduct = asyncHandler(async (req, res) => {
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

  const product = await Product.findById(req.params.id);

  if (!req || !req.params || !product) {
    res.status(404);
    throw new Error("Product not found");
  }

  if (product) {
    product.name = name || product.name;
    product.image = image || product.image;
    product.description = description || product.description;
    product.brand = brand || product.brand;
    product.category = category || product.category;
    product.price = price || product.price;
    product.countInStock = countInStock || product.countInStock;
    product.rating = rating || product.rating;
    product.numReviews = numReviews || product.numReviews;

    const updatedProduct = await product.save();

    res.json({
      _id: updatedProduct._id,
      name: updatedProduct.name,
      image: updatedProduct.image,
      description: updatedProduct.description,
      brand: updatedProduct.brand,
      category: updatedProduct.category,
      price: updatedProduct.price,
      countInStock: updatedProduct.countInStock,
      rating: updatedProduct.rating,
      numReviews: updatedProduct.numReviews,
    });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});
export { getProductById, getProducts, addProducts, deleteProductById, updateProduct };
