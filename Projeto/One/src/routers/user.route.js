import express from 'express';
const route = express.Router();

import userController from '../controllers/user.controllers.js';
import { validId, validUser } from '../middlewares/global.middlewares.js';

route.post('/creatuser', /* aqui vai o middlewares */ userController.create);//cria users

route.get('/all', userController.findAll);// procurar todos os users
route.get('/:id', validId, validUser,  userController.findById);// representação de um parametro :id, pode colocar qualquer nome, procurar users por id

route.patch('/:id', validId, validUser, userController.update); // faz updade dos users

export default route;
