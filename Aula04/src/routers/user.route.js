// passo 2 (modificando a rota)

// criando uma rota
const route = require('express').Router();
//puxando o passo 3
const userController = require('../controllers/user.controller')


// pode colocar um nome depois do / caso precise
// manipulando a rota
route.get('/', userController.soma)

// exportando a rota
module.exports = route
