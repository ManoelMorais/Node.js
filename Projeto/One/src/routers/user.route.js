const route = require('express').Router();
const userController = require('../controllers/user.controllers')

route.post('/', userController.create);//cria users

route.get('/', userController.findAll);// procurar todos os users
route.get('/:id', userController.findById);// representação de um parametro :id, pode colocar qualquer nome, procurar users por id

route.patch('/:id', userController.update);

module.exports = route;
