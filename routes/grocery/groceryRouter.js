const express = require("express");
const router = express.Router();
const {
  getAllGroceries,
  createGrocery,
  updateGroceryById,
  deleteGroceryById,
} = require("./controller/groceryController");

router.get("/get-all-groceries", getAllGroceries);

router.post("/create-grocery", createGrocery);

router.put("/update-grocery-by-id/:id", updateGroceryById);

router.delete("/delete-grocery-by-id/:id", deleteGroceryById);

// router.get("/sort-by-date-oldest-to-newest", sortByDate);

// router.get("/sort-by-date-newest-to-oldest", sortByDate);

// router.get("/sort-by-purchased", purchasedGrocery);

// router.get("/sort-by-not-purchased", notPurchasedGrocery);

module.exports = router;
