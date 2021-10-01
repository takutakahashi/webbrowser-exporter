#!/usr/local/bin/node

const result = process.argv.slice(2)
  .filter(e => e.includes(","))
  .map(e => e.split(","))
  .reduce((prev, cur) => prev + "\n" + cur[1] + " " + cur[0], "")

console.log(result)
