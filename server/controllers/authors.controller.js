const Author = require('../models/authors.model');

module.exports.findAllAuthors = (req, res) => {
    Author.find()
    .then((allAuthors) => {
        res.json(allAuthors)
    } )
    .catch((err) => [
        res.json(err)
    ]);
}

module.exports.findOneSingleAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
    .then(oneAuthor=> {
        res.json( oneAuthor)
    })
    .catch((err) => [
        res.json(err)
    ]);
}

module.exports.createNewAuthor = (req, res) => {
    const { name } = req.body;
    Author.create( { name } )
    .then(newAuthor => {
        res.json (newAuthor )
    })
    .catch((err) => {
        res.status(400).json(err)
    });
}

module.exports.updateExistingAuthor = (req, res) => {
    Author.findOneAndUpdate(
        { _id: req.params.id},
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedAuthor => {
            res.json( updatedAuthor )
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}

module.exports.deleteAnExisitingAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
    .then(result => {
        res.json( result )
    })
    .catch((err) => {
        res.json(err)
    });
}