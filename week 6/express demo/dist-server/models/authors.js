"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _db = _interopRequireDefault(require("./db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _db["default"].Schema;
var authorSchema = new Schema({
  name: String,
  country: String,
  age: Number,
  books: Array
}, {
  strict: true
});

var _default = _db["default"].model("authors", authorSchema);

exports["default"] = _default;