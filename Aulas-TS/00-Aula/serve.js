import http from "node:http";

const server = http.createServer((req, res) => {
  const { url, method } = req;
  
  if (url === "/" && method === "GET") {
    return res.end(JSON.stringify({ status: 404, body: "Welcome Peoples GET" }));
  }

  if (url === "/" && method === "POST") {
    return res.end(JSON.stringify({ status: 404, body: "Welcome Peoples POST" }));
  }

  if (url === "/contato" && method === "GET") {
    return res.end(JSON.stringify({ status: 404, body: "Contact" }));
  }

  res.statusCode = 404;
  return res.end(
    JSON.stringify({
      status: 404,
      body: "404 (Not Found)",
    })
  );
});

server.listen(3001, () => {
  console.log("Nunca vi essa merda");
});
