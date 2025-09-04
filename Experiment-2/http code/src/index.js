const http = require("http");
const handleRoutes = require("./routes/items.routes");

const PORT = 3000;

const server = http.createServer((req, res) => {
  handleRoutes(req, res);
});

server.listen(PORT, () => {
  console.log(` HTTP server running at http://localhost:${PORT}`);
});