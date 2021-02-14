'use strict';

const fs = require(`fs`);

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

const writeFile = (fileName, content) => {
  try {
    fs.writeFileSync(fileName, content);
    console.info(`Operation success. File created.`);
  } catch (err) {
    console.error(`Can't write data to file...`);
  }
};

const stringifyContent = (content) => {
  try {
    return JSON.stringify(content);
  } catch (err) {
    console.error(`Error occurred while stringifying content...`);
    return null;
  }
};

module.exports = {
  getRandomInt,
  shuffle,
  writeFile,
  stringifyContent,
};

