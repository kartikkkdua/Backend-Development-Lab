
const {listItems,getItemById,createItem,updateItem,deleteItem,sendJSON} = require("../controllers/items.controller");

function parseBody(req, callback) {
  let body = "";
  req.on("data", chunk => (body += chunk));
  req.on("end", () => {
    try {
      const parsed = JSON.parse(body || "{}");
      callback(parsed);
    } catch (err) {
      return sendJSON(
        { writeHead:()=>{}, end:()=>{} }, 400, { error: "Invalid JSON" }
      );
      callback({});
    }
  });
}

function handleRoutes(req, res) {
  const url = req.url;
  const method = req.method;

  if (method === "GET" && url === "/api/items") {
    return listItems(req, res);
  }

  if (method === "GET" && url.startsWith("/api/items/")) {
    const id = url.split("/")[3];
    return getItemById(req, res, id);
  }
  if (method === "POST" && url === "/api/items") {
    let body = "";
    req.on("data", chunk => (body += chunk));
    req.on("end", () => {
      try {
        const parsed = JSON.parse(body || "{}");
        return createItem(req, res, parsed);
      } catch {
        return sendJSON(res, 400, { error: "Invalid JSON" });
      }
    });
    return;
  }
  if (method === "PUT" && url.startsWith("/api/items/")) {
    const id = url.split("/")[3];
    let body = "";
    req.on("data", chunk => (body += chunk));
    req.on("end", () => {
      try {
        const parsed = JSON.parse(body || "{}");
        return updateItem(req, res, id, parsed);
      } catch {
        return sendJSON(res, 400, { error: "Invalid JSON" });
      }
    });
    return;
  }
  if (method === "DELETE" && url.startsWith("/api/items/")) {
    const id = url.split("/")[3];
    return deleteItem(req, res, id);
  }
  return sendJSON(res, 404, { error: "Route not found" });
}

module.exports = handleRoutes;

// Errors (HTTP Routes)
// 1) SyntaxError: Unexpected token in JSON
//    Client must send valid JSON with Content-Type: application/json
// 2) GET/PUT/DELETE hitting wrong path returns 404 Route not found
//  URL must exactly match /api/items or /api/items/:id
