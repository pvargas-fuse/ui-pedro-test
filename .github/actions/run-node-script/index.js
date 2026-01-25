import core from '@actions/core';

async function run() {
  exec(`npx bin-test`, (error, stdout) => {
    if (error !== null) {
      core.setFailed(error);
      core.notice(stdout);
    }
    core.info(stdout);
  });
}

run();
