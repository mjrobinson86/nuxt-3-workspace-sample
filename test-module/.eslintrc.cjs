module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: [
		'@typescript-eslint'
	],
	env: {
		browser: true,
		node: true
	},
	parserOptions: {
		ecmaVersion: 2020
	},
	overrides: [{
		files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
		env: {
			jest: true
		}
	}],
	rules: {
		'import/no-extraneous-dependencies': ['error', { packageDir: ['../'] }]
	}
};
