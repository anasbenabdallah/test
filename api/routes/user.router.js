const express = require("express");
const userRouter = express.Router();

//imported controllers
const {
  editProfile,
  getUser,
  getUserFriends,
  followUser,
  unfollowUser,
} = require("../controllers/user.controller");

//imported MiddleWare
const {
  authenticateToken,
} = require("../middlewares/authenticateToken.middleware");

userRouter.put("/users/:id/", authenticateToken, editProfile);
userRouter.get("/:id", authenticateToken, getUser);
userRouter.get("/:id/friends", authenticateToken, getUserFriends);
userRouter.put("/:id/follow", authenticateToken, followUser);
userRouter.put("/:id/unfollow", authenticateToken, unfollowUser);

module.exports = userRouter;
