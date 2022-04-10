const names = require("./names.js");

const defaultConfigs = {
	noEmoji: false,
};

const fromEntries = Object.fromEntries;
const entries = Object.entries;

const extraParam = (item, ...extraArgs) => {
	const [methodName, method] = item;
	return [methodName, (...args) => method.call(null, ...args, ...extraArgs)];
};

const helloWorld = (configs) => {
	const { noEmoji } = configs || defaultConfigs;
	const emoji = noEmoji ? "" : " ⭐️";
	return `Hello, World${emoji}!`;
};

const helloYourName = (name, configs) => {
	const { noEmoji } = configs || defaultConfigs;
	const emoji = noEmoji ? "" : " 🩴";
	return `Hello, ${name}${emoji}!`;
};

const helloRandomName = (configs) => {
	const { noEmoji } = configs || defaultConfigs;
	const emoji = noEmoji ? "" : " 👀";
	return `Hello, ${names.random()}${emoji}!`;
};

const helloFrom = (wherever, flag, configs) => {
	const { noEmoji } = configs || defaultConfigs;
	const emoji = noEmoji ? "" : ` ${flag || "🌎"}`;
	return `Hello from ${wherever}${emoji}!`;
};

const HelloWorld = { helloWorld, helloYourName, helloRandomName, helloFrom };

const factory = (configs) => {
	let methods = HelloWorld;
	const noEmoji = configs?.noEmoji || false;
	if (noEmoji) {
		methods = entries(HelloWorld).map((entry) => extraParam(entry, configs));
		methods = fromEntries(methods);
	}
	return methods;
};

module.exports = {
	...HelloWorld,
	factory,
};
