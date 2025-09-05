const Item = require("../models/item.model");

async function listAll() {
  return Item.find().sort({ createdAt: -1 }).lean();
}

async function getById(id) {
  return Item.findById(id).lean();
}

async function createItem(data) {
  const item = new Item({
    title: String(data.title || "").trim(),
    completed: !!data.completed
  });
  return item.save();
}

async function updateItem(id, data) {
  const update = {};
  if (data.title !== undefined) update.title = String(data.title).trim();
  if (data.completed !== undefined) update.completed = !!data.completed;
  update.updatedAt = new Date();

  return Item.findByIdAndUpdate(id, update, { new: true }).lean();
}

async function deleteItem(id) {
  return Item.findByIdAndDelete(id).lean();
}

module.exports = {
  listAll,
  getById,
  createItem,
  updateItem,
  deleteItem
};
