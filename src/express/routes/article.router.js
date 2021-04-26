'use strict';

const {Router} = require(`express`);

const articleRouter = new Router();

articleRouter.get(`/category/:id`, (req, res) => res.render(`articles-by-category`));
articleRouter.get(`/edit/:id`, (req, res) => res.send(`/edit/id`));
articleRouter.get(`/add`, (req, res) => res.render(`new-post`));
articleRouter.get(`/id`, (req, res) => res.render(`post`));
articleRouter.get(`/`, (req, res) => res.render(`all-categories`));

module.exports = articleRouter;
