'use strict';

const mongoose = require('mongoose'),
    articles = require('../controllers/articleController'),
    users = require('../controllers/userController');

const routeHandler = (app) => {
    app.route('/articles').get(articles.listAllArticles).post(articles.addAnArticle);
    app.route('/articles/:articleId').get(articles.listOneArticle);
    app.route('/users').post(users.registerUser);
};

module.exports = routeHandler