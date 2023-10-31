"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _swagger = _interopRequireDefault(require("../swagger.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var swaggerRoute = (0, _express.Router)();

if (_typeof(_swagger["default"]) === "object") {
  console.log("JSON importado com sucesso.");
} else {
  console.error("O arquivo JSON não foi importado corretamente.");
}

swaggerRoute.use('/', _swaggerUiExpress["default"].serve);
swaggerRoute.get('/', _swaggerUiExpress["default"].setup(_swagger["default"]));
var _default = swaggerRoute;
exports["default"] = _default;