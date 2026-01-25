const { exec } = require('node:child_process');
const core = require('@actions/core');

async function run() {
  exec('npx bin-test sum 2 3', (error, stdout) => {
    if (error !== null) {
      core.setFailed(error);
      core.notice(stdout);
    }
    core.info(stdout);
  });
}

run();
