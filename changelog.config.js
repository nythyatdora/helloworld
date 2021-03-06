module.exports = {
	disableEmoji: false,
	format: "{type}{scope}: {emoji}{subject}",
	list: [
		"test",
		"feat",
		"fix",
		"chore",
		"docs",
		"refactor",
		"style",
		"ci",
		"perf",
	],
	maxMessageLength: 64,
	minMessageLength: 3,
	questions: [
		"type",
		"scope",
		"subject",
		"body",
		"breaking",
		"issues",
		"lerna",
	],
	scopes: [],
	types: {
		chore: {
			description: "build process or auxiliary tool changes",
			emoji: "โ๏ธ",
			value: "chore",
		},
		ci: {
			description: "ci related changes",
			emoji: "๐",
			value: "ci",
		},
		docs: {
			description: "documentation only changes",
			emoji: "๐ถ",
			value: "docs",
		},
		feat: {
			description: "a new feature",
			emoji: "โญ๏ธ",
			value: "feat",
		},
		fix: {
			description: "a bug fix",
			emoji: "๐ฉด",
			value: "fix",
		},
		perf: {
			description: "a code change that improves performance",
			emoji: "๐จ",
			value: "perf",
		},
		refactor: {
			description: "a code change that neither fixes a bug or adds a feature",
			emoji: "๐ฆ",
			value: "refactor",
		},
		release: {
			description: "create a release commit",
			emoji: "๐ณ",
			value: "release",
		},
		style: {
			description: "markup, white-space, formatting, missing semi-colons...",
			emoji: "๐",
			value: "style",
		},
		test: {
			description: "adding missing tests",
			emoji: "๐งค",
			value: "test",
		},
	},
};
