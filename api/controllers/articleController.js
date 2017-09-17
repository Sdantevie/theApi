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
        err ? res.send(err) : res.json(article);
    });
};

exports.addAnArticle = (req, res) => {
    let newArticle = new Article(req.body);
    newArticle.save((err, data) => {
        err ? res.send(err) : res.json(data);
    });
}