const nameList = require("./names.json");
const uniqueRandomArray = (array) => () =>
	array[Math.floor(Math.random() * array.length)];
const random = uniqueRandomArray(nameList);

const names = {
	random,
};

module.exports = names;
