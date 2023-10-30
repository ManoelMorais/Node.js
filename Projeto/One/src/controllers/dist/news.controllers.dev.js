"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteComments = exports.AddComments = exports.likeNews = exports.erase = exports.update = exports.byUser = exports.searchByTitle = exports.findbyid = exports.topNews = exports.getAll = exports.create = void 0;

var _newsService = require("../services/news.service.js");

var create = function create(req, res) {
  var _req$body, title, text, banner;

  return regeneratorRuntime.async(function create$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, title = _req$body.title, text = _req$body.text, banner = _req$body.banner;

          if (!title || !text || !banner) {
            res.status(400).send({
              message: "Submit all fields for registration"
            });
          }

          _context.next = 5;
          return regeneratorRuntime.awrap((0, _newsService.createServiceNews)({
            title: title,
            text: text,
            banner: banner,
            user: req.userId
          }));

        case 5:
          res.send(201);
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          res.status(500).send(_context.t0.message);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

exports.create = create;

var getAll = function getAll(req, res) {
  var _req$query, limit, offset, news, total, currentyUrl, next, nextUrl, preVious, preViousUrl;

  return regeneratorRuntime.async(function getAll$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$query = req.query, limit = _req$query.limit, offset = _req$query.offset;
          limit = Number(limit);
          offset = Number(offset);

          if (!limit) {
            limit = 5;
          }

          if (!offset) {
            offset = 0;
          }

          _context2.next = 8;
          return regeneratorRuntime.awrap((0, _newsService.findeAllService)(limit, offset));

        case 8:
          news = _context2.sent;
          _context2.next = 11;
          return regeneratorRuntime.awrap((0, _newsService.conuterNews)());

        case 11:
          total = _context2.sent;
          currentyUrl = req.baseUrl;
          next = offset + limit;
          nextUrl = next < total ? "".concat(currentyUrl, "?limit=").concat(limit, "&offset=").concat(next) : null;
          preVious = offset - limit < 0 ? null : offset - limit;
          preViousUrl = preVious != null ? "".concat(currentyUrl, "?limit=").concat(limit, "&offset=").concat(preVious) : null;

          if (!(news.lenght === 0)) {
            _context2.next = 19;
            break;
          }

          return _context2.abrupt("return", res.status(400).send({
            message: "There are no registered news"
          }));

        case 19:
          res.send({
            nextUrl: nextUrl,
            preViousUrl: preViousUrl,
            limit: limit,
            offset: offset,
            total: total,
            results: news.map(function (newsItem) {
              return {
                id: newsItem._id,
                title: newsItem.title,
                text: newsItem.text,
                banner: newsItem.banner,
                likes: newsItem.likes,
                commets: newsItem.commets,
                name: newsItem.user.name,
                larftsname: newsItem.user.larftsname,
                useravatar: newsItem.user.avatar
              };
            })
          });
          _context2.next = 25;
          break;

        case 22:
          _context2.prev = 22;
          _context2.t0 = _context2["catch"](0);
          res.status(500).send({
            message: _context2.t0.message
          });

        case 25:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 22]]);
};

exports.getAll = getAll;

var topNews = function topNews(req, res) {
  var news;
  return regeneratorRuntime.async(function topNews$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap((0, _newsService.topNewsService)());

        case 3:
          news = _context3.sent;

          if (news) {
            _context3.next = 6;
            break;
          }

          return _context3.abrupt("return", res.status(400).send({
            message: "There is no registered post"
          }));

        case 6:
          res.send({
            news: {
              id: news._id,
              title: news.title,
              text: news.text,
              banner: news.banner,
              likes: news.likes,
              commets: news.commets,
              name: news.user.name,
              larftsname: news.user.larftsname,
              useravatar: news.user.avatar
            }
          });
          _context3.next = 12;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          res.status(500).send({
            message: _context3.t0.message
          });

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 9]]);
};

exports.topNews = topNews;

var findbyid = function findbyid(req, res) {
  var id, news;
  return regeneratorRuntime.async(function findbyid$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;
          _context4.next = 4;
          return regeneratorRuntime.awrap((0, _newsService.findbyidService)(id));

        case 4:
          news = _context4.sent;
          return _context4.abrupt("return", res.send({
            news: {
              id: news._id,
              title: news.title,
              text: news.text,
              banner: news.banner,
              likes: news.likes,
              commets: news.commets,
              name: news.user.name,
              larftsname: news.user.larftsname,
              useravatar: news.user.avatar
            }
          }));

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](0);
          res.status(500).send({
            message: _context4.t0.message
          });

        case 11:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

exports.findbyid = findbyid;

var searchByTitle = function searchByTitle(req, res) {
  var title, news;
  return regeneratorRuntime.async(function searchByTitle$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          title = req.query.title;
          _context5.next = 4;
          return regeneratorRuntime.awrap((0, _newsService.searchByTitleService)(title));

        case 4:
          news = _context5.sent;

          if (!(news.lenght === 0)) {
            _context5.next = 7;
            break;
          }

          return _context5.abrupt("return", res.status(400).send({
            message: "There are no news with this title"
          }));

        case 7:
          return _context5.abrupt("return", res.send({
            results: news.map(function (newsItem) {
              return {
                id: newsItem._id,
                title: newsItem.title,
                text: newsItem.text,
                banner: newsItem.banner,
                likes: newsItem.likes,
                commets: newsItem.commets,
                name: newsItem.user.name,
                larftsname: newsItem.user.larftsname,
                useravatar: newsItem.user.avatar
              };
            })
          }));

        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](0);
          res.status(500).send({
            message: err.message
          });

        case 13:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 10]]);
};

exports.searchByTitle = searchByTitle;

var byUser = function byUser(req, res) {
  var id, news;
  return regeneratorRuntime.async(function byUser$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          id = req.userId;
          _context6.next = 4;
          return regeneratorRuntime.awrap((0, _newsService.byUserService)(id));

        case 4:
          news = _context6.sent;
          return _context6.abrupt("return", res.send({
            results: news.map(function (newsItem) {
              return {
                id: newsItem._id,
                title: newsItem.title,
                text: newsItem.text,
                banner: newsItem.banner,
                likes: newsItem.likes,
                commets: newsItem.commets,
                name: newsItem.user.name,
                larftsname: newsItem.user.larftsname,
                useravatar: newsItem.user.avatar
              };
            })
          }));

        case 8:
          _context6.prev = 8;
          _context6.t0 = _context6["catch"](0);
          res.status(500).send({
            message: _context6.t0.message
          });

        case 11:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

exports.byUser = byUser;

var update = function update(req, res) {
  var _req$body2, title, text, banner, id, news;

  return regeneratorRuntime.async(function update$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _req$body2 = req.body, title = _req$body2.title, text = _req$body2.text, banner = _req$body2.banner;
          id = req.params.id;

          if (!title && !text && !banner) {
            res.status(400).send({
              message: "Submit at last one field to update the post"
            });
          }

          _context7.next = 6;
          return regeneratorRuntime.awrap((0, _newsService.findbyidService)(id));

        case 6:
          news = _context7.sent;

          if (!(news.user.id != req.userId)) {
            _context7.next = 9;
            break;
          }

          return _context7.abrupt("return", res.status(400).send({
            message: "You didn't update this post"
          }));

        case 9:
          _context7.next = 11;
          return regeneratorRuntime.awrap((0, _newsService.updateService)(id, title, text, banner));

        case 11:
          return _context7.abrupt("return", res.send({
            message: "Post succesfully update!"
          }));

        case 14:
          _context7.prev = 14;
          _context7.t0 = _context7["catch"](0);
          return _context7.abrupt("return", res.status(500).send({
            message: _context7.t0.message
          }));

        case 17:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[0, 14]]);
};

exports.update = update;

var erase = function erase(req, res) {
  var id, news;
  return regeneratorRuntime.async(function erase$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          id = req.params.id;
          _context8.next = 4;
          return regeneratorRuntime.awrap((0, _newsService.findbyidService)(id));

        case 4:
          news = _context8.sent;

          if (!(news.user.id != req.userId)) {
            _context8.next = 7;
            break;
          }

          return _context8.abrupt("return", res.status(400).send({
            message: "You didn't update this post"
          }));

        case 7:
          _context8.next = 9;
          return regeneratorRuntime.awrap((0, _newsService.eraseService)(id));

        case 9:
          return _context8.abrupt("return", res.send({
            message: "News deleted successfully"
          }));

        case 12:
          _context8.prev = 12;
          _context8.t0 = _context8["catch"](0);
          return _context8.abrupt("return", res.status(500).send({
            message: _context8.t0.message
          }));

        case 15:
        case "end":
          return _context8.stop();
      }
    }
  }, null, null, [[0, 12]]);
};

exports.erase = erase;

var likeNews = function likeNews(req, res) {
  var id, userID, newsLiked;
  return regeneratorRuntime.async(function likeNews$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          id = req.params.id;
          userID = req.userId;
          _context9.next = 5;
          return regeneratorRuntime.awrap((0, _newsService.likeService)(id, userID));

        case 5:
          newsLiked = _context9.sent;

          if (newsLiked) {
            _context9.next = 10;
            break;
          }

          _context9.next = 9;
          return regeneratorRuntime.awrap((0, _newsService.deletelikeService)(id, userID));

        case 9:
          return _context9.abrupt("return", res.status(200).send({
            message: "Like successfullt removed"
          }));

        case 10:
          res.send({
            message: "Like done successfully"
          });
          _context9.next = 16;
          break;

        case 13:
          _context9.prev = 13;
          _context9.t0 = _context9["catch"](0);
          return _context9.abrupt("return", res.status(500).send({
            message: _context9.t0.message
          }));

        case 16:
        case "end":
          return _context9.stop();
      }
    }
  }, null, null, [[0, 13]]);
};

exports.likeNews = likeNews;

var AddComments = function AddComments(req, res) {
  var id, userId, comment, commentDeleted, commentsFinder;
  return regeneratorRuntime.async(function AddComments$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          id = req.params.id;
          userId = req.userId;
          comment = req.body.comment;

          if (comment) {
            _context10.next = 6;
            break;
          }

          return _context10.abrupt("return", res.status(400).send({
            message: "pq Deus"
          }));

        case 6:
          _context10.next = 8;
          return regeneratorRuntime.awrap((0, _newsService.AddCommentsService)(id, comment, userId));

        case 8:
          commentDeleted = _context10.sent;
          commentsFinder = commentDeleted.comment.find(function (comment) {
            return comment.idComment === idComment;
          });

          if (commentsFinder) {
            _context10.next = 12;
            break;
          }

          return _context10.abrupt("return", res.status(400).send({
            message: "Comment not found"
          }));

        case 12:
          if (!(commentsFinder.userId !== userId)) {
            _context10.next = 14;
            break;
          }

          return _context10.abrupt("return", res.status(400).send({
            message: "You can't delete this comment"
          }));

        case 14:
          res.send({
            message: "Comment successfully compledet!"
          });
          _context10.next = 20;
          break;

        case 17:
          _context10.prev = 17;
          _context10.t0 = _context10["catch"](0);
          return _context10.abrupt("return", res.status(500).send({
            message: _context10.t0.message
          }));

        case 20:
        case "end":
          return _context10.stop();
      }
    }
  }, null, null, [[0, 17]]);
};

exports.AddComments = AddComments;

var deleteComments = function deleteComments(req, res) {
  var _req$params, idNews, _idComment, userId;

  return regeneratorRuntime.async(function deleteComments$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _req$params = req.params, idNews = _req$params.idNews, _idComment = _req$params.idComment;
          userId = req.userId;
          _context11.next = 5;
          return regeneratorRuntime.awrap((0, _newsService.deleteCommentsService)(idNews, _idComment, userId));

        case 5:
          // console.log(commentDeleted)
          res.send({
            message: "Comment successfilly remove!"
          });
          _context11.next = 11;
          break;

        case 8:
          _context11.prev = 8;
          _context11.t0 = _context11["catch"](0);
          return _context11.abrupt("return", res.status(500).send({
            message: _context11.t0.message
          }));

        case 11:
        case "end":
          return _context11.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

exports.deleteComments = deleteComments;