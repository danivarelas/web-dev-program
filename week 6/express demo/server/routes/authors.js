import express from 'express';
import AuthorsService from '../services/AuthorsService';
import Author from '../models/Author';

var router = express.Router();

var authorsService = new AuthorsService();

/* GET authors listing. */
router.get('/', function(req, res, next) {
    res.json(authorsService.selectAll());
});

router.post('/', function(req, res, next) {
    const { name, country, age } = req.body;
    const author = new Author(name, country, age);
    authorsService.save(author);
    res.send('respond with a resource');
});

export default router;