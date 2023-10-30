"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteCommentsService = exports.AddCommentsService = exports.deletelikeService = exports.likeService = exports.eraseService = exports.updateService = exports.byUserService = exports.searchByTitleService = exports.findbyidService = exports.topNewsService = exports.conuterNews = exports.findeAllService = exports.createServiceNews = void 0;

var _News = _interopRequireDefault(require("../models/News.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var createServiceNews = function createServiceNews(body) {
  return _News["default"].create(body);
};

exports.createServiceNews = createServiceNews;

var findeAllService = function findeAllService(limit, offset) {
  return _News["default"].find().sort({
    _id: -1
  }).skip(offset).limit(limit).populate("user");
};

exports.findeAllService = findeAllService;

var conuterNews = function conuterNews() {
  return _News["default"].countDocuments();
};

exports.conuterNews = conuterNews;

var topNewsService = function topNewsService() {
  return _News["default"].findOne().sort({
    _id: -1
  }).populate("user");
};

exports.topNewsService = topNewsService;

var findbyidService = function findbyidService(id) {
  return _News["default"].findById(id).populate("user");
};

exports.findbyidService = findbyidService;

var searchByTitleService = function searchByTitleService(title) {
  return _News["default"].find({
    title: {
      $regex: "".concat(title || ""),
      $options: "i"
    }
  }).sort({
    _id: -1
  }).populate("user");
};

exports.searchByTitleService = searchByTitleService;

var byUserService = function byUserService(id) {
  return _News["default"].find({
    user: id
  }).sort({
    _id: -1
  }).populate("user");
};

exports.byUserService = byUserService;

var updateService = function updateService(id, title, text, banner) {
  return _News["default"].findOneAndUpdate({
    _id: id
  }, {
    title: title,
    text: text,
    banner: banner
  }, {
    rawResult: true
  });
};

exports.updateService = updateService;

var eraseService = function eraseService(id) {
  return _News["default"].findByIdAndDelete({
    _id: id
  });
};

exports.eraseService = eraseService;

var likeService = function likeService(idNews, userId) {
  return _News["default"].findOneAndUpdate({
    _id: idNews,
    "likes.userId": {
      $nin: [userId]
    }
  }, {
    $push: {
      likes: {
        userId: userId,
        create: new Date()
      }
    }
  });
};

exports.likeService = likeService;

var deletelikeService = function deletelikeService(idNews, userId) {
  return _News["default"].findOneAndUpdate({
    _id: idNews
  }, {
    $pull: {
      likes: {
        userId: userId
      }
    }
  });
};

exports.deletelikeService = deletelikeService;

var AddCommentsService = function AddCommentsService(idNews, comment, userId) {
  var idComment = Math.floor(Date.now() * Math.random()).toString(36);
  return _News["default"].findOneAndUpdate({
    _id: idNews
  }, {
    $push: {
      comment: {
        idComment: idComment,
        userId: userId,
        comment: comment,
        createAt: new Date()
      }
    }
  });
};

exports.AddCommentsService = AddCommentsService;

var deleteCommentsService = function deleteCommentsService(idNews, idComment, userId) {
  return _News["default"].findOneAndUpdate({
    _id: idNews
  }, {
    $pull: {
      comment: {
        idComment: idComment,
        userId: userId
      }
    }
  });
};

exports.deleteCommentsService = deleteCommentsService;