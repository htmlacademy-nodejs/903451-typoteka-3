'use strict';

const express = require(`express`);
const fs = require(`fs`).promises;
const {
  DEFAULT_PORT,
  FILE_NAME,
  HttpCode
} = require(`../../constants`);

module.exports = {
  name: `--server`,
  run() {
    const app = express();
    app.use(express.json());

    app.get(`/posts`, async (req, res) => {
      try {
        const fileContent = await fs.readFile(FILE_NAME);
        const mocks = JSON.parse(fileContent);
        res.json(mocks);
      } catch (err) {
        res.status(HttpCode.INTERNAL_SERVER_ERROR).send(err);
      }
    });

    app.use((req, res) => res
      .status(HttpCode.NOT_FOUND)
      .send(`Not found`));

    app.listen(DEFAULT_PORT);
  }
};
