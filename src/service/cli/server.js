'use strict';

const http = require(`http`);
const chalk = require(`chalk`);
const fs = require(`fs`).promises;
const {
  DEFAULT_PORT,
  HOME_PATH,
  NOT_FOUND_MESSAGE_TEXT,
  FILE_NAME,
  HttpCode
} = require(`../../constants`);
const {sendResponse} = require(`../../utils`);

const handleHomePathRequest = async (response) => {
  try {
    const fileContent = await fs.readFile(FILE_NAME);
    const mocks = JSON.parse(fileContent);
    const message = mocks.map((post) => `<li>${post.title}</li>`).join(``);
    sendResponse(response, HttpCode.OK, `<ul>${message}</ul>`);
  } catch (err) {
    sendResponse(response, HttpCode.NOT_FOUND, NOT_FOUND_MESSAGE_TEXT);
  }
};

const onClientConnect = async (req, res) => {
  if (req.url === HOME_PATH) {
    return handleHomePathRequest(res);
  }
  return sendResponse(res, HttpCode.NOT_FOUND, NOT_FOUND_MESSAGE_TEXT);
};

module.exports = {
  name: `--server`,
  run(args) {
    const [customPort] = args;
    const port = Number.parseInt(customPort, 10) || DEFAULT_PORT;

    http.createServer(onClientConnect)
      .listen(port)
      .on(`listening`, (err) => {
        if (err) {
          return console.error(`Ошибка при создании сервера`, err);
        }

        return console.info(chalk.green(`Ожидаю соединений на ${port}`));
      });
  }
};
