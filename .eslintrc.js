// http://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,
	env: {
		browser: true,
		builtin: true,
		jasmine: true,
		mocha: true,
		node: true,
		es6: true,
	},
	"extends": [
		'plugin:vue/recommended',
		'plugin:prettier/recommended',
		'prettier',
		'prettier/vue',
	],
	parserOptions: {
		parser: 'babel-eslint',
		ecmaVersion: 2017,
		sourceType: 'module', // es6 import/export
	},
	plugins: [
		// Disable html to enable eslint and prettier formats on .vue files
		// 'html',
		'prettier',
		'vue'
	],
	// Check if imports actually resolve
	settings: {
		'import/resolver': {
			'webpack': {
				'config': 'webpack.config.js'
			}
		}
	},
	// Add custom rules here
	'rules': {
		// Configure prettier formatting rules
		'prettier/prettier': [
			'error',
			{
				'printWidth': 80,
				'useTabs': true,
				'tabWidth': 2,
				'semi': true,
				'trailingComma': 'es5',
				'bracketSpacing': true,
				'singleQuote': true,
				// 'alignObjectProperties': true, 
				// 'noSpaceEmptyFn': true,
			}
		],
		'linebreak-style': 0,
		'global-require': 0,

		'import/first': 0,

		'no-param-reassign': 0,
		'no-multi-assign': 0,
		// Indent using tabs
		'no-tabs': 0,
		'indent': [0, 'tab', {
			'SwitchCase': 1,
			}
		],
		// Allow nameless functions
		'func-names': ['error', 'never'],
		// Allow console messages
		'no-console': ['error', { allow: ['info', 'log', 'warn', 'error'] }],
		// Allow variable shadows for specified variables
		'no-shadow': ['error', { 'allow': ['state', 'getters', 'rootState'] }],
		// Allow unary operators in the afterthough
		'allowForLoopAfterthoughts': 0,
		// Arrow body style
		'arrow-body-style': ['error', 'as-needed'],
		// Allow + operator concatenation
		'prefer-template': 0,
		'camelcase': ['error', {properties: 'never'}],
		'no-nested-ternary': 0,
		// Allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
	}
};
