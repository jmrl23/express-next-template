const { existsSync } = require('fs');
const { join } = require('path');

function main() {
  if (existsSync(join(__dirname, 'build/main.js'))) {
    require('./build/main');
    return;
  }

  if (existsSync(join(__dirname, 'build/src/main.js'))) {
    require('./build/src/main');
    return;
  }

  console.error('Cannot find main file');
}

void main();
