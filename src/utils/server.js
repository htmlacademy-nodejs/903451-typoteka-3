'use strict';

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

module.exports.sendResponse = sendResponse;
