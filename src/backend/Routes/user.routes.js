import { Router } from "express";
import {
  registerUser,
  getCurrentUser,
  loginUser,
  logoutUser,
  refreshAccessToken
} from "../controllers/user.controllers.js";
import { upload } from "../middleware/multer.middleware.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router();

router
  .route("/register")
  .post(upload.single("avatarUrl"), registerUser);
router.route("/login").post(loginUser);
router.route("/refresh-token").post(refreshAccessToken);

// secured routes

router.route("/logout").post(verifyJWT, logoutUser);
router.route("/getUser").get(verifyJWT, getCurrentUser);

export default router;