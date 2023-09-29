//criando um servidor local

const express = require('express');

const serve = express();


// http://localhost:300/hello?nome=Manoel&idade-21
// Query params = ?nome=Manoel&idade=21

// http://localhost:300/Manoel
// Route params = /hello/:nome ou id 


//rota 01
serve.get('/hello', (req, res) => {

// desconstrução const { nome, idade } = req.query;
//    const nome = req.query.nome;
    const { nome, idade } = req.query;

    return res.json({ 
        title: 'hello world',
        pessoa: `olá ${nome}`,
        messagem: 'tudo bem!?',
        idade: idade,
        messagem: 'Rota um',
    });
});


//rota 02
serve.get('/hello/:nome', (req, res) => {

    const nome = req.params.nome;

    return res.json({ 
        title: 'hello world',
        pessoa: `olá ${nome}`,
        messagem: 'Rota dois',
    });
});

serve.listen(3000);

//locais ser servidores locais
//127.0.0.1
//localhost
//portas mais usadas para abrir servidores
//3000
//5000
//8000
//8080