'use strict';

const DEFAULT_COUNT = 1;

const INTERVAL_IN_MONTHS = 3;

const MIN_COUNT = 1;

const MAX_COUNT = 1000;

const DEFAULT_COMMAND = `--help`;

const UTF8_ENCODING_FORMAT = `utf8`;

const USER_ARGV_INDEX = 2;

const ExitCode = {
  error: 1,
  success: 0,
};


module.exports = {
  DEFAULT_COUNT,
  INTERVAL_IN_MONTHS,
  MIN_COUNT,
  MAX_COUNT,
  DEFAULT_COMMAND,
  UTF8_ENCODING_FORMAT,
  USER_ARGV_INDEX,
  ExitCode,
};
