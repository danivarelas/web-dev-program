"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _AuthorsService = _interopRequireDefault(require("../services/AuthorsService"));

var _Author = _interopRequireDefault(require("../models/Author"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

var authorsService = new _AuthorsService["default"]();
/* GET authors listing. */

router.get('/', function (req, res, next) {
  res.json(authorsService.selectAll());
});
router.post('/', function (req, res, next) {
  var _req$body = req.body,
      name = _req$body.name,
      country = _req$body.country,
      age = _req$body.age;
  var author = new _Author["default"](name, country, age);
  authorsService.save(author);
  res.send('respond with a resource');
});
var _default = router;
exports["default"] = _default;