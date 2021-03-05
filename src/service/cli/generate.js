'use strict';

const chalk = require(`chalk`);

const {
  writeJSONFile,
  readUTF8Content,
  generateCategory,
  generateTitle,
  generateSentences,
  generateDate,
  generateFullText,
} = require(`../../utils`);

const {
  FILE_NAME,
  FILE_TITLES_PATH,
  FILE_CATEGORIES_PATH,
  FILE_SENTENCES_PATH,
  AnnounceRestrict,
  DEFAULT_COUNT,
  MAX_COUNT,
  INTERVAL_IN_MONTHS,
} = require(`../../constants`);

const generateOffers = (count, titles, sentences, categories) => (
  Array(count).fill({}).map(() => ({
    title: generateTitle(titles),
    announce: generateSentences(sentences, AnnounceRestrict.MIN, AnnounceRestrict.MAX),
    fullText: generateFullText(sentences),
    createdDate: generateDate(INTERVAL_IN_MONTHS),
    category: generateCategory(categories),
  }))
);


module.exports = {
  name: `--generate`,
  async run(args) {
    const [count] = args;
    const countOffer = Number.parseInt(count, 10) || DEFAULT_COUNT;

    if (countOffer > MAX_COUNT) {
      return console.error(chalk.red(`Not more than 1000 offers`));
    }

    const [titles, categories, sentences] = await Promise.all([
      readUTF8Content(FILE_TITLES_PATH),
      readUTF8Content(FILE_CATEGORIES_PATH),
      readUTF8Content(FILE_SENTENCES_PATH),
    ]);
    const content = generateOffers(countOffer, titles, categories, sentences);

    return writeJSONFile(FILE_NAME, content);
  }
};
