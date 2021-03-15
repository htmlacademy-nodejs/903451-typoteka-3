'use strict';

const express = require(`express`);
const {FRONT_CLIENT_PORT} = require(`../constants`);
const mainRouter = require(`./routes/main.router`);
const myRouter = require(`./routes/my.router`);
const articleRouter = require(`./routes/article.router`);


const app = express();

app.use(`/articles`, articleRouter);
app.use(`/my`, myRouter);
app.use(`/`, mainRouter);

app.listen(FRONT_CLIENT_PORT);
