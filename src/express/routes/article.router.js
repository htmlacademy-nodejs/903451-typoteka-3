'use strict';

const {Router} = require(`express`);

const articleRouter = new Router();

articleRouter.get(`/category/:id`, (req, res) => res.send(`/offers/category/:id ${req.params.id}`));
articleRouter.get(`/edit/:id`, (req, res) => res.send(`/offers/edit/:id ${req.params.id}`));
articleRouter.get(`/add`, (req, res) => res.send(`/offers/add`));
articleRouter.get(`/id`, (req, res) => res.send(`/offers/id`));
articleRouter.get(`/`, (req, res) => res.send(`/offers`));

module.exports = articleRouter;
