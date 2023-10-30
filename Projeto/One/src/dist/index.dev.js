"use strict";

var _db = _interopRequireDefault(require("./database/db.js"));

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _userRoute = _interopRequireDefault(require("./routers/user.route.js"));

var _authRoute = _interopRequireDefault(require("./routers/auth.route.js"));

var _newsRoute = _interopRequireDefault(require("./routers/news.route.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var serve = (0, _express["default"])();
var port = process.env.PORT || 3000;
(0, _db["default"])();
serve.use(_express["default"].json());
serve.use("/user", _userRoute["default"]);
serve.use("/auth", _authRoute["default"]);
serve.use("/news", _newsRoute["default"]);
serve.listen(port, function () {
  return console.log("Server On, porta ".concat(port));
});