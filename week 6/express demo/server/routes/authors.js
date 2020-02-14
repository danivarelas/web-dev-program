import express from 'express';
import cors from 'cors';
import authorsService from '../services/authorsService';

var router = express.Router();

router.use(cors());
/* GET authors listing. */
router.get("/", function (req, res) {
    authorsService.getAll(function (err, result) {
        res.json(result);
    });
});

router.get("/:id", function (req, res) {
    const { _id } = req.params;
    authorsService.findById(_id, function (err, result) {
        res.json(result);
    });
});

router.post("/", function (req, res, next) {
    authorsService.createAuthor(req.body);
    res.send({
        status: 200,
        message: "success"
    });
});

router.put("/:id", function (req, res, next) {
    const { _id } = req.params;
    authorsService.updateById(_id, req.body, function (err, result) {
        res.json(result);
    });
});

router.delete("/", function (req, res, next) {
    authorsService.deleteById(req.body);
    res.send({
        status: 200,
        message: "success"
    });
});

export default router;