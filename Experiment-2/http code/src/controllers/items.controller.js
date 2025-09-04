

const { v4: uuid } = require("uuid");
const db = require("../db");

function sendJSON(res, status, data) {
  res.writeHead(status, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data));
}
function listItems(req, res) {
  sendJSON(res, 200, { count: db.items.length, data: db.items });
}
function getItemById(req, res, id) {
  const item = db.items.find(i => i.id === id);
  if (!item) return sendJSON(res, 404, { error: "Item not found" });
  sendJSON(res, 200, item);
}
function createItem(req, res, body) {
  if (!body.title) return sendJSON(res, 400, { error: "title is required" });
  const item = { id: uuid(), title: String(body.title), completed: !!body.completed };
  db.items.push(item);
  sendJSON(res, 201, item);
}
function updateItem(req, res, id, body) {
  const item = db.items.find(i => i.id === id);
  if (!item) return sendJSON(res, 404, { error: "Item not found" });
  if (body.title !== undefined) item.title = String(body.title);
  if (body.completed !== undefined) item.completed = !!body.completed;
  sendJSON(res, 200, item);
}
function deleteItem(req, res, id) {
  const idx = db.items.findIndex(i => i.id === id);
  if (idx === -1) return sendJSON(res, 404, { error: "Item not found" });
  const [deleted] = db.items.splice(idx, 1);
  sendJSON(res, 200, { message: "Item deleted", item: deleted });
}

module.exports = {listItems,getItemById,createItem,updateItem,deleteItem,sendJSON};
// Errors

// 1) TypeError: Cannot read properties of undefined (reading 'items')
//    Fixed using : module.exports = { items } and const db = require("../db");

// 2) 400 Bad Request: {"error":"title is required"}
//    Fix: Send valid JSON: {"title":"Learn HTTP"}; ensure routes parse JSON before calling createItem

// 3) 404 Not Found: {"error":"Item not found"}
//    Fixed: First GET /api/items, use a valid id , beacuse i have not used an valid id , i just passed it empty
