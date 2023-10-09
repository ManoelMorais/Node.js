const route = require('express').Router();

const userController = require('../controllers/user.controllers')

route.post('/', userController.create)

module.exports = route
