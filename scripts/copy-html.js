const { buildFolderName } = require('../package.json');
const { generateStatic } = require('./generate-static');

const routes = ['dashboard'];

// todo: import `generateStatic` from `@ankr.com/utils` package
generateStatic(`./${buildFolderName}`, routes);
