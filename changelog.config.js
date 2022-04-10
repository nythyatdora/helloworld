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
			emoji: "✈️",
			value: "chore",
		},
		ci: {
			description: "ci related changes",
			emoji: "🌈",
			value: "ci",
		},
		docs: {
			description: "documentation only changes",
			emoji: "🍶",
			value: "docs",
		},
		feat: {
			description: "a new feature",
			emoji: "⭐️",
			value: "feat",
		},
		fix: {
			description: "a bug fix",
			emoji: "🩴",
			value: "fix",
		},
		perf: {
			description: "a code change that improves performance",
			emoji: "💨",
			value: "perf",
		},
		refactor: {
			description: "a code change that neither fixes a bug or adds a feature",
			emoji: "🚦",
			value: "refactor",
		},
		release: {
			description: "create a release commit",
			emoji: "🛳",
			value: "release",
		},
		style: {
			description: "markup, white-space, formatting, missing semi-colons...",
			emoji: "💅",
			value: "style",
		},
		test: {
			description: "adding missing tests",
			emoji: "🧤",
			value: "test",
		},
	},
};
