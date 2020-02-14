import authors from "../models/authors";

const createAuthor = author => {
    authors.create(author);
};

const getAll = cb => {
    authors.find({}, cb);
};

const findById = (id, cb) => {
    authors.findOne({ id }, cb);
};

const updateById = (id, author, cb) => {
    authors.findOneAndUpdate({ id }, author, cb);
};

const deleteById = id => {
    authors.deleteOne({ id });
};

export default {
    createAuthor,
    getAll,
    findById,
    updateById,
    deleteById
};