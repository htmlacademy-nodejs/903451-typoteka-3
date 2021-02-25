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
    const titles = await readUTF8Content(FILE_TITLES_PATH);
    const categories = await readUTF8Content(FILE_CATEGORIES_PATH);
    const sentences = await readUTF8Content(FILE_SENTENCES_PATH);

    const [count] = args;
    const countOffer = Number.parseInt(count, 10) || DEFAULT_COUNT;
    const content = generateOffers(countOffer, titles, categories, sentences);

    if (countOffer > MAX_COUNT) {
      return console.error(chalk.red(`Not more than 1000 offers`));
    }

    return writeJSONFile(FILE_NAME, content);
  }
};
