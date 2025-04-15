// import express from "express";
// import { addOrderItem, getOrders } from "../controller/orderController.js";
// import { protect } from '../middleware/authMiddleWare.js'
// const router = express.Router();


// router.route("/").post(protect, addOrderItem);
// router.route("/").get(getOrders)
// export default router;

// import { addOrderItem, getOrders, getMyOrders } from "../controller/orderController.js";
// import { protect } from '../middleware/authMiddleWare.js'

// const router = express.Router();

// router.route("/").post(protect, addOrderItem);         // Create order
// router.route("/").get(getOrders);                      // Get all orders (admin maybe)
// router.route("/myorders").get(protect, getMyOrders);   // ✅ Get current user's orders

// export default router;


import express from "express";
import {
    addOrderItem,
    getOrders,
    updateOrderToPaid,
    updateOrderToDelivered,
    cancelOrder
} from "../controller/orderController.js";
import { protect } from "../middleware/authMiddleWare.js";

const router = express.Router();

router.route("/").post(protect, addOrderItem);
router.route("/").get(getOrders);

router.route("/:id/pay").put(updateOrderToPaid);
router.route("/:id/deliver").put(updateOrderToDelivered);
router.route("/:id/cancel").delete(cancelOrder);


export default router;
