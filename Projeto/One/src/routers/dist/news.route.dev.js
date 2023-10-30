"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _authMiddlewares = require("../middlewares/auth.middlewares.js");

var _newsControllers = require("../controllers/news.controllers.js");

var NewsRoute = (0, _express.Router)();
NewsRoute.post("/", _authMiddlewares.authMiddlewere, _newsControllers.create);
NewsRoute.get("/", _newsControllers.getAll);
NewsRoute.get("/top", _newsControllers.topNews);
NewsRoute.get("/search", _newsControllers.searchByTitle);
NewsRoute.get("/byUser", _authMiddlewares.authMiddlewere, _newsControllers.byUser);
NewsRoute.get("/:id", _authMiddlewares.authMiddlewere, _newsControllers.findbyid);
NewsRoute["delete"]("/:id", _authMiddlewares.authMiddlewere, _newsControllers.erase);
NewsRoute.patch("/:id", _authMiddlewares.authMiddlewere, _newsControllers.update);
NewsRoute.patch("/like/:id", _authMiddlewares.authMiddlewere, _newsControllers.likeNews);
NewsRoute.patch("/comment/:id", _authMiddlewares.authMiddlewere, _newsControllers.AddComments);
NewsRoute.patch("/comment/:idNews/:idComment", _authMiddlewares.authMiddlewere, _newsControllers.deleteComments);
var _default = NewsRoute;
exports["default"] = _default;