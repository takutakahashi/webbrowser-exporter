#!/bin/env node

const exec = require('./lib/execute');

(async () => {
  const results = await exec(process.argv.slice(2))
  console.log(JSON.stringify(results))
})()
