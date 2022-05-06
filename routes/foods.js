const express = require("express");
const { protect, authorize } = require("../middleware/protect");

//buh categoriig controller-ees import hiij bna
const {
  getFoods,
  getFood,
  createFood,
  deleteFood,
  updateFood,
  uploadFoodPhoto,
} = require("../controller/foods");

// const { getFoodComments } = require("../controller/comments");

const router = express.Router();

// "/api/v1/foods"
router
  .route("/")
  .get(getFoods)
  .post(protect, authorize("admin", "operator"), createFood);

router
  .route("/:id")
  .get(getFood)
  .delete(protect, authorize("admin", "operator"), deleteFood)
  .put(protect, authorize("admin", "operator"), updateFood);

router
  .route("/:id/photo")
  .put(protect, authorize("admin", "operator"), uploadFoodPhoto);

// router.route("/:id/comments").get(getBookComments);

// export hiij bna
module.exports = router;
