const { v4: uuid } = require("uuid");
const db = require("../db");
function listItems(req, res) {
  res.json({ count: db.items.length, data: db.items });
}
function getItemById(req, res) {
  const item = db.items.find(i => i.id === req.params.id);
  if (!item) return res.status(404).json({ error: "Item not found" });
  res.json(item);
}
function createItem(req, res) {
  const title = String(req.body?.title || "").trim();
  if (!title) return res.status(400).json({ error: "title is required" });
  const now = new Date().toISOString();
  const item = {
    id: uuid(),
    title,
    completed: Boolean(req.body?.completed) || false,
    createdAt: now,
    updatedAt: now
  };
  db.items.push(item);
  res.status(201).json(item);
}
function updateItem(req, res) {
  const item = db.items.find(i => i.id === req.params.id);
  if (!item) return res.status(404).json({ error: "Item not found" });

  if (req.body?.title !== undefined) {
    item.title = String(req.body.title).trim();
  }
  if (req.body?.completed !== undefined) {
    item.completed = Boolean(req.body.completed);
  }
  item.updatedAt = new Date().toISOString();
  res.json(item);
}
function deleteItem(req, res) {
  const idx = db.items.findIndex(i => i.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: "Item not found" });
  const [deleted] = db.items.splice(idx, 1);
  res.json({ message: "Item deleted", item: deleted });
}
module.exports = {
  listItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem
};

// Errors 
//   1) Error: Cannot find module 'uuid'
//      Fix: Run `npm install uuid`
 
//   2) req.body is undefined
//      beacuse of - Missing `app.use(express.json())` in index.js.
//      Fix: Add `app.use(express.json());`
 
//   3) 400 Bad Request: { "error": "title is required" }
//      because of - POST request sent without a title or with empty string.
//      Fix: Send JSON with a valid title:
//           { "title": "Learn Express" }
 
//   4) 404 Not Found: { "error": "Item not found" }
//      beacuse of :- Wrong or non-existent ID used in GET/PUT/DELETE request.
//      Fix: First GET /api/items to check IDs, then use a valid one.
