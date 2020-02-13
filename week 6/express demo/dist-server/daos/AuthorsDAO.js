"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function AuthorsDAO() {
  var authorsList = [];

  this.save = function (authorDTO) {
    authorsList.push(authorDTO);
    console.log(authorsList);
  };

  this.selectAll = function () {
    console.log(authorsList);
    return authorsList;
  };
}

Object.freeze(AuthorsDAO);
var _default = AuthorsDAO;
exports["default"] = _default;