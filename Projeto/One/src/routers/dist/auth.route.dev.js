"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _authControllers = require("../controllers/auth.controllers.js");

var authRoute = (0, _express.Router)();
authRoute.post('/', _authControllers.login);
var _default = authRoute;
exports["default"] = _default;