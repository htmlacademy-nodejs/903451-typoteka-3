'use strict';

const {
  getRandomInt,
  shuffle,
  writeFile,
  stringifyContent
} = require(`./common`);

const {
  generateCategory,
  generateTitle,
  generateSentences,
  generateDate,
  generateFullText,
} = require(`./fileGeneration`);

module.exports = {
  getRandomInt,
  shuffle,
  writeFile,
  stringifyContent,
  generateCategory,
  generateTitle,
  generateSentences,
  generateDate,
  generateFullText,
};

