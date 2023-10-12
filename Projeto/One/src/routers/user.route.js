const route = require('express').Router();
const userController = require('../controllers/user.controllers')
const { validId, validUser} = require('../middlewares/global.middlewares')

route.post('/', /* aqui vai o middlewares */ userController.create);//cria users

route.get('/', userController.findAll);// procurar todos os users
route.get('/:id', validId, validUser,  userController.findById);// representação de um parametro :id, pode colocar qualquer nome, procurar users por id

route.patch('/:id', validId, validUser, userController.update); // faz updade dos users

module.exports = route;
