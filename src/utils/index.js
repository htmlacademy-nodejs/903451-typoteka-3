'use strict';

const {
  getRandomInt,
  shuffle,
  writeJSONFile,
  readUTF8Content,
} = require(`./common`);

const {
  generateCategory,
  generateTitle,
  generateSentences,
  generateDate,
  generateFullText,
} = require(`./fileGeneration`);

const {onClientConnect} = require(`./server`);

module.exports = {
  getRandomInt,
  shuffle,
  writeJSONFile,
  readUTF8Content,
  generateCategory,
  generateTitle,
  generateSentences,
  generateDate,
  generateFullText,
  onClientConnect,
};

