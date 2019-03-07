'use strict';

module.exports = {
   out: './docs',
   // mode: 'file',
   mode: 'modules',
   exclude: './tests/**/*',
   excludeExternals: true,
   excludePrivate: true,
   tsconfig: './src/tsconfig.commonjs.json',
   name: 'Lambda Express',
   readme: './README.md',
   hideGenerator: true,
};
