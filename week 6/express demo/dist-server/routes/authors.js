"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _authorsService = _interopRequireDefault(require("../services/authorsService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.use((0, _cors["default"])());
/* GET authors listing. */

router.get("/", function (req, res) {
  _authorsService["default"].getAll(function (err, result) {
    res.json(result);
  });
});
router.get("/:id", function (req, res) {
  var _id = req.params._id;

  _authorsService["default"].findById(_id, function (err, result) {
    res.json(result);
  });
});
router.post("/", function (req, res, next) {
  _authorsService["default"].createAuthor(req.body);

  res.send({
    status: 200,
    message: "success"
  });
});
router.put("/:id", function (req, res, next) {
  var _id = req.params._id;

  _authorsService["default"].updateById(_id, req.body, function (err, result) {
    res.json(result);
  });
});
router["delete"]("/", function (req, res, next) {
  _authorsService["default"].deleteById(req.body);

  res.send({
    status: 200,
    message: "success"
  });
});
var _default = router;
exports["default"] = _default;