'use strict';

const mongoose = require('mongoose'),
    articles = require('../controllers/articleController');

const routeHandler = (app) => {
    app.route('/articles').get(articles.listAllArticles).post(articles.addAnArticle);
    app.route('/articles/:articleId').get(articles.listOneArticle);
};

module.exports = routeHandler