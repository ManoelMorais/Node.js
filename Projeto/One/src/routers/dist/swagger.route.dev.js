"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _swagger = _interopRequireDefault(require("../swagger.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var swaggerRoute = (0, _express.Router)();
swaggerRoute.use('/', _swaggerUiExpress["default"].serve);
swaggerRoute.get('/', _swaggerUiExpress["default"].setup(_swagger["default"]));
var _default = swaggerRoute;
exports["default"] = _default;