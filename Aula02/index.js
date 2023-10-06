const express = require("express")
const server = express()

server.use(express.json());

let customrs = [
    { id: 1, name: "dev", site: "http://devsamurai.com.br"},
    { id: 2, name: "google", site: "http://google.com"},
    { id: 3, name: "uol", site: "http://uol.com.br"},
];

server.get("/customes", (req, res) => {
    return res.json(customrs);
})

server.get("/customes", (req, res) => {
    
    const id = parseInt(req.params.id);
    const customer = customrs.find(item => item.id === id);
    const status= customer ? 200 : 404;

    return res.json(status).json(customer);
});

server.listen(3000);
