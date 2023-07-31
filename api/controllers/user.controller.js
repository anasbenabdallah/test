const userSchema = require("../models/user.model");
const companySchema = require("../models/company.model");
const bcrypt = require("bcrypt");
const { pick } = require("lodash");

// ==============================|| EditProfile ||============================== //
const editProfile = async (req, res) => {
  try {
    const updateFields = pick(req.body, [
      "firstname",
      "lastname",
      "email",
      "password",
      "picturePath",
    ]);
    if (updateFields.password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(updateFields.password, salt);
      updateFields.password = hashedPass;
    }
    const updatedUser = await userSchema
      .findByIdAndUpdate(req.params.id, updateFields, { new: true })
      .select("-password");
    res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getUserFriends = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );
    const formattedFriends = friends.map(
      ({ _id, firstName, lastName, occupation, location, picturePath }) => {
        return { _id, firstName, lastName, occupation, location, picturePath };
      }
    );
    res.status(200).json(formattedFriends);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const followUser = async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await userSchema.findById(req.params.id);
      const currentUser = await userSchema.findById(req.body.userId);
      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({ $push: { followings: req.params.id } });
        res.status(200).json("user has been followed");
      } else {
        res.status(403).json("you allready follow this user");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you cant follow yourself");
  }
};

const unfollowUser = async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await userSchema.findById(req.params.id);
      const currentUser = await userSchema.findById(req.body.userId);
      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({ $pull: { followers: req.body.userId } });
        await currentUser.updateOne({ $pull: { followings: req.params.id } });
        res.status(200).json("user has been unfollowed");
      } else {
        res.status(403).json("you dont follow this user");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you cant unfollow yourself");
  }
};

module.exports = {
  editProfile,
  getUser,
  getUserFriends,
  followUser,
  unfollowUser,
};
