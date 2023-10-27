"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var NewsSchema = new _mongoose["default"].Schema({
  title: {
    type: String,
    require: true
  },
  text: {
    type: String,
    require: true
  },
  banner: {
    type: String,
    require: true
  },
  createdAT: {
    type: Date,
    "default": Date.now()
  },
  user: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "User",
    require: true
  },
  likes: {
    type: Array,
    require: true
  },
  comment: {
    type: Array,
    require: true
  }
});

var News = _mongoose["default"].model("News", NewsSchema);

var _default = News;
exports["default"] = _default;