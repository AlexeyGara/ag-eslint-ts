import {execSync} from 'child_process';
import { writeFileSync } from 'fs';
import { join } from 'path';

const buildPath = `.eslint-config-inspector`;
const basePath = '/ag-eslint-ts/';
const deployWithDotFiles = '--dotfiles';

try {
	console.log(`\n--- Starting Build: '${buildPath}' ---`);
	execSync(`npm run inspect-eslint:build -- --base ${basePath}`, {stdio: 'inherit'});
	console.log(`\n--- Build Finished. ---`);

	// create empty file '.nojekyl' for avoid blocks '/_nuxt/' folder by github's Jekyll
	writeFileSync(join(buildPath, '.nojekyll'), '');
	console.log('\n.nojekyll created');

	console.log(`\n--- Starting Deploy: 'gh-pages' -> '${buildPath}' ---`);
	execSync(`gh-pages -d ${buildPath} ${deployWithDotFiles}`, {stdio: 'inherit'});
	console.log('--- Successfully Deployed. ---');
}
catch(error) {
	console.error('--- Deployment failed! ---');
	console.error(error.message);

	process.exit(1);
}