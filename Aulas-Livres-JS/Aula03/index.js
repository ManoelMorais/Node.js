const express = require('express');
const serve = express();

serve.use(express.json());

serve.get("/router", (req, res) =>{
   const soma = 100 + 1

   res.json(soma)
});

serve.listen(3000);

// req = requisição
// res = resposta
