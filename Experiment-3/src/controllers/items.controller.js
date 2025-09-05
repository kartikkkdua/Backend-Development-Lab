const repository = require("../repositories/items.repository");

async function listItems(req, res, next) {
  try {
    const items = await repository.listAll();
    res.json({ count: items.length, data: items });
  } catch (err) {
    next(err);
  }
}

async function getItemById(req, res, next) {
  try {
    const item = await repository.getById(req.params.id);
    if (!item) return res.status(404).json({ error: "Item not found" });
    res.json(item);
  } catch (err) {
    next(err);
  }
}

async function createItem(req, res, next) {
  try {
    const title = String(req.body?.title || "").trim();
    if (!title) return res.status(400).json({ error: "title is required" });

    const item = await repository.createItem({ title, completed: req.body?.completed });
    res.status(201).json(item);
  } catch (err) {
    next(err);
  }
}

async function updateItem(req, res, next) {
  try {
    const existing = await repository.getById(req.params.id);
    if (!existing) return res.status(404).json({ error: "Item not found" });

    const updated = await repository.updateItem(req.params.id, req.body);
    res.json(updated);
  } catch (err) {
    next(err);
  }
}

async function deleteItem(req, res, next) {
  try {
    const deleted = await repository.deleteItem(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Item not found" });
    res.json({ message: "Item deleted", item: deleted });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  listItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem
};
