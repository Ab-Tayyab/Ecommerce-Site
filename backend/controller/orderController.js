// import asyncHandler from "express-async-handler";
// import Order from "../models/orderModel.js";

// const addOrderItem = asyncHandler(async (req, res) => {
//   const {
//     orderItems,
//     shippingAddress,
//     paymentMethod,
//     itemPrice,
//     taxPrice,
//     shippingPrice,
//     totalPrice,
//   } = req.body;

//   if (orderItems.length === 0) {
//     res.status(404);
//     throw new Error("No order items");
//     return;
//   } else {
//     const order = new Order({
//       orderItems,
//       user: req.user.id,
//       shippingAddress,
//       paymentMethod,
//       itemPrice,
//       taxPrice,
//       shippingPrice,
//       totalPrice,
//     });
//     const createOrder = await order.save();
//     res.status(201).json(createOrder);
//   }
// });

// const getOrders = asyncHandler(async (req, res) => {
//   const Orders = await Order.find({});
//   res.json(Orders);
// });

// export { addOrderItem, getOrders };


const asyncHandler = require("express-async-handler");
const Order = require("../models/orderModel.js");

const addOrderItem = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems.length === 0) {
    res.status(404);
    throw new Error("No order items");
    return;
  } else {
    const order = new Order({
      orderItems,
      user: req.user.id,
      shippingAddress,
      paymentMethod,
      itemPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });
    const createOrder = await order.save();
    res.status(201).json(createOrder);
  }
});

const getOrders = asyncHandler(async (req, res) => {
  const Orders = await Order.find({});
  res.json(Orders);
});

module.exports = { addOrderItem, getOrders };
