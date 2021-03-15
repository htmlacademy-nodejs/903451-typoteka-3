'use strict';

const DEFAULT_COUNT = 1;
const INTERVAL_IN_MONTHS = 3;
const MIN_COUNT = 1;
const MAX_COUNT = 1000;

const DEFAULT_COMMAND = `--help`;

const DEFAULT_PORT = 3000;
const FRONT_CLIENT_PORT = 8080;

const UTF8_ENCODING_FORMAT = `utf8`;
const USER_ARGV_INDEX = 2;
const HOME_PATH = `/`;
const NOT_FOUND_MESSAGE_TEXT = `Not found`;

const ExitCode = {
  error: 1,
  success: 0,
};

const HttpCode = {
  OK: 200,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  FORBIDDEN: 403,
  UNAUTHORIZED: 401,
};


module.exports = {
  DEFAULT_COUNT,
  INTERVAL_IN_MONTHS,
  MIN_COUNT,
  MAX_COUNT,
  DEFAULT_COMMAND,
  DEFAULT_PORT,
  FRONT_CLIENT_PORT,
  UTF8_ENCODING_FORMAT,
  USER_ARGV_INDEX,
  HOME_PATH,
  NOT_FOUND_MESSAGE_TEXT,
  ExitCode,
  HttpCode,
};
