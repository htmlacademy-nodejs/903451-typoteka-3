'use strict';

const {getRandomInt, shuffle} = require(`./common`);
const {MIN_COUNT} = require(`../constants`);


const generateCategory = (categoriesList) => {
  return Array.of(categoriesList[getRandomInt(0, categoriesList.length - 1)]);
};

const generateTitle = (titleList) => {
  return titleList[getRandomInt(0, titleList.length - 1)];
};

const generateSentences = (sentencesList, minCount, maxCount) => {
  return shuffle(sentencesList).slice(minCount, maxCount).join(` `);
};

const generateFullText = (sentencesList) => {
  return generateSentences(sentencesList, MIN_COUNT, sentencesList.length - 1);
};

const generateDate = (monthInterval) => {
  const now = new Date();
  const beforeNow = (new Date(now)).setMonth(now.getMonth() - monthInterval);
  return new Date(getRandomInt(beforeNow.valueOf(), now.valueOf())).toJSON();
};

module.exports = {
  generateCategory,
  generateTitle,
  generateSentences,
  generateDate,
  generateFullText,
};
