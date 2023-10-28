"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = void 0;

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _authService = require("../services/auth.service.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var login = function login(req, res) {
  var _req$body, email, password, user, passwordIsValid, token;

  return regeneratorRuntime.async(function login$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, email = _req$body.email, password = _req$body.password;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap((0, _authService.loginService)(email));

        case 4:
          user = _context.sent;

          if (user) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", res.status(404).send({
            message: "User or Password not found"
          }));

        case 7:
          passwordIsValid = _bcrypt["default"].compareSync(password, user.password);

          if (passwordIsValid) {
            _context.next = 10;
            break;
          }

          return _context.abrupt("return", res.status(400).send({
            message: "User or Password not found"
          }));

        case 10:
          token = (0, _authService.generateToken)(user.id);
          res.send({
            token: token
          });
          _context.next = 17;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](1);
          res.status(500).send(_context.t0.message);

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 14]]);
};

exports.login = login;