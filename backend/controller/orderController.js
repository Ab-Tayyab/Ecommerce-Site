import asyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";

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

const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.json(orders);
});



const updateOrderToPaid = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
        order.isPaid = true;
        order.paidAt = Date.now();
        const updatedOrder = await order.save();
        res.json(updatedOrder);
    } else {
        res.status(404);
        throw new Error("Order not found");
    }
});

const updateOrderToDelivered = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
        order.isDelivered = true;
        order.deliveredAt = Date.now();
        const updatedOrder = await order.save();
        res.json(updatedOrder);
    } else {
        res.status(404);
        throw new Error("Order not found");
    }
});

const cancelOrder = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
        await order.remove();
        res.json({ message: "Order cancelled" });
    } else {
        res.status(404);
        throw new Error("Order not found");
    }
});


export { addOrderItem, getOrders, getMyOrders,updateOrderToPaid, updateOrderToDelivered, cancelOrder };

