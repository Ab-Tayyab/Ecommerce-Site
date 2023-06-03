// import express from "express";
// import { addOrderItem, getOrders } from "../controller/orderController.js";
// import { protect } from '../middleware/authMiddleWare.js'
// const router = express.Router();


// router.route("/").post(protect, addOrderItem);
// router.route("/").get(getOrders)
// export default router;


const express = require("express");
const { addOrderItem, getOrders } = require("../controller/orderController.js");
const { protect } = require('../middleware/authMiddleWare.js');
const router = express.Router();

router.route("/").post(protect, addOrderItem);
router.route("/").get(getOrders);

module.exports = router;
