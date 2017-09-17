'use strict';

const mongoose = require('mongoose'),
      Article = mongoose.model('Article');

exports.listAllArticles = (req, res) => {
    Article.find({}, (err, articles) => {
        err ? res.send(err) : res.json(articles);
    });
};

exports.listOneArticle = (req, res) => {
    Article.findById(req.params.articleId, (err, article) => {
        err ? res.send(err) : res.json(articles);
    });
};