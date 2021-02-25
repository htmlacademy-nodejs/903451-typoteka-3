'use strict';

const fs = require(`fs`).promises;

const {HOME_PATH, NOT_FOUND_MESSAGE_TEXT, FILE_NAME, HttpCode} = require(`../constants`);

const createResponseTemplateWithMessage = (message) => {
  return `
    <!Doctype html>
      <html lang="ru">
      <head>
        <title>With love from Node</title>
      </head>
      <body>${message}</body>
    </html>`.trim();
};

const sendResponse = (response, httpStatusCode, message) => {
  const template = createResponseTemplateWithMessage(message);

  response.statusCode = httpStatusCode;
  response.writeHead(httpStatusCode, {
    'Content-Type': `text/html; charset=UTF-8`,
  });

  response.end(template);
};

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

module.exports.onClientConnect = onClientConnect;
