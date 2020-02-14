"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _authors = _interopRequireDefault(require("../models/authors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var createAuthor = function createAuthor(author) {
  _authors["default"].create(author);
};

var getAll = function getAll(cb) {
  _authors["default"].find({}, cb);
};

var findById = function findById(id, cb) {
  _authors["default"].findOne({
    id: id
  }, cb);
};

var updateById = function updateById(id, author, cb) {
  _authors["default"].findOneAndUpdate({
    id: id
  }, author, cb);
};

var deleteById = function deleteById(id) {
  _authors["default"].deleteOne({
    id: id
  });
};

var _default = {
  createAuthor: createAuthor,
  getAll: getAll,
  findById: findById,
  updateById: updateById,
  deleteById: deleteById
};
exports["default"] = _default;