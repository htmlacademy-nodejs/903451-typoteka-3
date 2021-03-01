'use strict';

const fs = require(`fs`).promises;
const path = require(`path`);
const chalk = require(`chalk`);

const {UTF8_ENCODING_FORMAT} = require(`../constants`);

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const shuffle = (someArray) => {
  for (let i = someArray.length - 1; i > 0; i--) {
    const randomPosition = Math.floor(Math.random() * i);
    [someArray[i], someArray[randomPosition]] = [someArray[randomPosition], someArray[i]];
  }

  return someArray;
};

const writeJSONFile = async (fileName, content) => {
  try {
    const data = JSON.stringify(content);
    await fs.writeFile(fileName, data);
    console.info(chalk.green(`Operation success. File created.`));
  } catch (err) {
    console.error(chalk.red(err));
  }
};

const readUTF8Content = async (filePath) => {
  try {
    const content = await fs.readFile(path.resolve(__dirname, filePath), UTF8_ENCODING_FORMAT);
    if (content) {
      return content.split(`\n`)
        .map((line) => line.trim())
        .filter((line) => !!line);
    }
    return [];
  } catch (err) {
    console.error(chalk.red(`Error occurred while reading ${filePath}`));
    throw new Error(err);
  }
};

module.exports = {
  getRandomInt,
  shuffle,
  writeJSONFile,
  readUTF8Content,
};

