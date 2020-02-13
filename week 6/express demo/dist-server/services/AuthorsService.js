"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AuthorsDAO = _interopRequireDefault(require("../daos/AuthorsDAO"));

var _AuthorDTO = _interopRequireDefault(require("../dtos/AuthorDTO"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function AuthorsService() {
  var authorsDAO = new _AuthorsDAO["default"]();

  this.save = function (author) {
    var uuidv1 = require('uuid/v1');

    var authorDTO = new _AuthorDTO["default"](uuidv1(), author.name, author.country, author.age, author.books);
    authorsDAO.save(authorDTO);
  };

  this.selectAll = function () {
    return authorsDAO.selectAll;
  };
}

var _default = AuthorsService;
exports["default"] = _default;