const reviewModel = require("../models/Review.model");
const challengeModel = require("../models/Challenge.model");

const createReview = async (req, res) => {
  if (req.body.star > 5) {
    return res
      .status(400)
      .json({ message: "Star value must be between 1 and 5" });
  }
  const newReview = new reviewModel({
    userId: req.userId,
    challengeId: req.body.challengeId,
    description: req.body.description,
    star: req.body.star,
  });

  try {
    //fetch our reviews
    const review = await reviewModel.findOne({
      challengeId: req.body.challengeId,
      userId: req.userId,
      description: req.body.description,
      star: req.body.star,
    });
    console.log(review);

    if (review) {
      return res.status(403).json("you have already created a review");
    }

    const savedReview = await newReview.save();
    //we should update our challenge after we are giving a review and i'm going to increment my total stars
    await challengeModel.findByIdAndUpdate(req.body.challengeId, {
      $inc: { totalStars: req.body.star, starNumber: 1 },
    });
    await res.status(200).json(savedReview);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
const getReviews = async (req, res) => {
  try {
    const reviews = await reviewModel.find({
      challengeId: req.params.challengeId,
    });
    res.status(200).json(reviews);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
const deleteReview = async (req, res) => {
  try {
    const review = await reviewModel.findOneAndDelete({
      _id: req.params.id,
      userId: req.userId,
    });

    console.log(req.params.id);
    console.log(req.userId);
    console.log(review);

    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    await challengeModel.findByIdAndUpdate(review.challengeId, {
      $inc: { totalStars: -review.star, starNumber: -1 },
    });

    return res.status(200).json({ message: "Review deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
module.exports = {
  createReview,
  getReviews,
  deleteReview,
};
