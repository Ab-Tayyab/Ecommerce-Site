import express from "express";
import { authUser, getUserProfile,registerUser } from "../controller/userController.js";
import { protect } from "../middleware/authMiddleWare.js";
const router = express.Router();

router.route("/create").post(registerUser);
router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile);

export default router;
