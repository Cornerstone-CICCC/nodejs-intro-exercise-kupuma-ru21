import * as http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Home</h1>");
    return;
  }
  if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>About</h1>");
    return;
  }
  if (req.url === "/my-account") {
    res.writeHead(403, { "Content-Type": "text/plain" });
    res.end("You have no access to this page");
    return;
  }
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Page not found");
});

server.listen(8000, () => {
  console.log("Server started on http://localhost:8000");
});
