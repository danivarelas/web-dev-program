"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function AuthorDTO(id, name, country, age, books) {
  this.id = id;
  this.name = name;
  this.country = country;
  this.age = age;
  this.books = books;
}

var _default = AuthorDTO;
exports["default"] = _default;