import { Router } from "express";
import {
  getAllPosts,
  likePost,
  unlikePost,
  addComment,
  getComments,
  getSuggestedUsers,
  getUserActivity
} from "../controllers/posts.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router();

// All routes require authentication
router.use(verifyJWT);

// Posts routes
router.route("/").get(getAllPosts);
router.route("/like").post(likePost);
router.route("/unlike").post(unlikePost);
router.route("/comment").post(addComment);
router.route("/comments/:postId/:mediaId").get(getComments);

// User related routes
router.route("/suggested-users").get(getSuggestedUsers);
router.route("/user-activity").get(getUserActivity);

export default router;
