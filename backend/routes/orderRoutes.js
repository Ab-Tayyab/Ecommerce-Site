import express from "express";
import asyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";
import { addOrderItem } from "../controller/orderController.js";
import {protect} from '../middleware/authMiddleWare.js'
const router = express.Router();

// @ desc fetch all data
// @ route get/application/product
// @ access public

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const orders = await Order.find({});
    res.json(orders);
  })
);

// @ desc fetch single product
// @ route get/application/product/:id
// @ access public

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
      res.json(order);
    } else {
      res.status(404);
      throw new Error({ massage: "User not found" });
    }
  })
);

router.route("/").post(protect, addOrderItem);
export default router;
