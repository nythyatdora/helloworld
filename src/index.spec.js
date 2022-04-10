const { factory } = require("./index");
const names = require("./names.json");

describe("HelloWorld: withEmoji 🕺", () => {
	const { helloWorld, helloYourName, helloRandomName, helloFrom } = factory({
		noEmoji: false,
	});

	it("run `helloWorld()` should return `Hello, World ⭐️!`", () => {
		expect(helloWorld()).toBe(`Hello, World ⭐️!`);
	});

	it("run `helloYourName('Harry')` should return `Hello, Harry 🩴!`", () => {
		expect(helloYourName("Harry")).toBe(`Hello, Harry 🩴!`);
	});

	it("run `helloRandomName()` should return `Hello, ${randomName} 👀!`", () => {
		const actualResults = names.map((name) => `Hello, ${name} 👀!`);
		Array.from({ length: 10 }).forEach(() => {
			expect(actualResults).toContain(helloRandomName());
		});
	});

	it("run `helloFrom('Japan', '🇯🇵')` should return `Hello from Japan 🇯🇵!`", () => {
		expect(helloFrom("Japan", "🇯🇵")).toBe(`Hello from Japan 🇯🇵!`);
	});
});

describe("HelloWorld: noEmoji", () => {
	const { helloWorld, helloYourName, helloRandomName, helloFrom } = factory({
		noEmoji: true,
	});

	it("run `helloWorld()` should return `Hello, World!`", () => {
		expect(helloWorld()).toBe(`Hello, World!`);
	});

	it("run `helloYourName('Harry')` should return `Hello, Harry!`", () => {
		expect(helloYourName("Harry")).toBe(`Hello, Harry!`);
	});

	it("run `helloRandomName()` should return `Hello, ${randomName}!`", () => {
		const actualResults = names.map((name) => `Hello, ${name}!`);
		Array.from({ length: 10 }).forEach(() => {
			expect(actualResults).toContain(helloRandomName());
		});
	});

	it("run `helloFrom('Japan', '🇯🇵')` should return `Hello from Japan!`", () => {
		expect(helloFrom("Japan", "🇯🇵")).toBe(`Hello from Japan!`);
	});
});
