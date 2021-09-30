#!/usr/local/bin/node

const exec = require('./lib/execute');

(async () => {
  const results = await exec(process.argv.slice(2))
  process.stdout.write(JSON.stringify(results))
})()
