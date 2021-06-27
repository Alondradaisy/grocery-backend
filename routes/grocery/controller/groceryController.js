const Grocery = require("../model/Grocery");

async function getAllGroceries(req, res) {
  try {
    let allGroceries = await Grocery.find({});
    res.json({ payload: allGroceries });
  } catch {
    res.status(500).json({ message: e.message, error: e });
  }
}

async function createGrocery(req, res) {
  try {
    let createdList = new Grocery({
      grocery: req.body.grocery,
    });
    let savedGroceryItem = await createdList.save();
    res.json({ payload: savedGroceryItem });
  } catch (e) {
    res.status(500).json({ message: e.message, error: e });
  }
}

async function updateGroceryById(req, res) {
  try {
    let updatedGroceryItem = await Grocery.findByIdAndUpdate(
      { _id: req.params.id }, //dynamic find
      req.body,
      { new: true } //refers to new updated version
    );
    res.json({ payload: updatedGroceryItem });
  } catch (e) {
    res.status(500).json({ message: e.message, error: e });
  }
}

async function deleteGroceryById(req, res) {
  try {
    let deletedGroceryItem = await Grocery.findByIdAndRemove(req.params.id);
    res.json({ payload: deletedGroceryItem });
  } catch (e) {
    res.status(500).json({ message: e.message, error: e });
  }
}

module.exports = {
  getAllGroceries,
  createGrocery,
  updateGroceryById,
  deleteGroceryById,
};
