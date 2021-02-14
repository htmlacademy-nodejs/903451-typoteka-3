'use strict';

const {
  getRandomInt,
  shuffle,
  writeFile,
  stringifyContent,
  generateCategory,
  generateTitle,
  generateSentences,
  generateDate,
  generateFullText,
} = require(`../../utils`);

const {
  FILE_NAME,
  TITLES,
  ANNOUNCES,
  CATEGORIES,
  AnnounceRestrict,
} = require(`../../data`);

const {DEFAULT_COUNT, MAX_COUNT, INTERVAL_IN_MONTHS} = require(`../../constants`);


const generateOffers = (count) => (
  Array(count).fill({}).map(() => ({
    title: generateTitle(TITLES),
    announce: generateSentences(ANNOUNCES, AnnounceRestrict.MIN, AnnounceRestrict.MAX),
    fullText: generateFullText(ANNOUNCES),
    createdDate: generateDate(INTERVAL_IN_MONTHS),
    category: generateCategory(CATEGORIES),
  }))
);


module.exports = {
  name: `--generate`,
  run(args) {
    const [count] = args;
    const countOffer = Number.parseInt(count, 10) || DEFAULT_COUNT;
    const content = stringifyContent(generateOffers(countOffer));

    if (countOffer >= MAX_COUNT) {
      return console.info(`Not more than 1000 offers`);
    }

    return writeFile(FILE_NAME, content);
  }
};
