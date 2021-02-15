'use strict';

const {
  getRandomInt,
  shuffle,
  writeJSONFile
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
  writeJSONFile,
  generateCategory,
  generateTitle,
  generateSentences,
  generateDate,
  generateFullText,
};

