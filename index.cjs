/*
 * [WARNING:]
 * This eslint config is only for oldest IDEs (that not support eslint 9+) and real-time linting only; it is NOT USED by the CLI lint script for check and auto-fixing!
 */

const path = require('path');
const rules = require('./.eslint-rules.json');

module.exports = function () {
	return {
		parser: '@typescript-eslint/parser',
		parserOptions: {
			projectService: true,
			createDefaultProgram: false,
			ecmaVersion: "latest",
			sourceType: "module"
		},
		plugins: [
			'@typescript-eslint',
			'@stylistic/ts',
			//'jest'
		],
		extends: [
			'plugin:import/recommended',
			'plugin:import/typescript',
			'plugin:@typescript-eslint/recommended',
			//'plugin:jest/recommended'
		],
		settings: {
			'import/resolver': {
				typescript: {
					alwaysTryTypes: true,
					project: './tsconfig.json'
				}
			}
		},
		env: {
			//"jest/globals": true
		},
		ignorePatterns: [
			"dist",
			"build/",
			"temp/",
			//"src/_global-init_",
			"node_modules/",
			"vite.config.ts"
		],
		rules
	}
}();