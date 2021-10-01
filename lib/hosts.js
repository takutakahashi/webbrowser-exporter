#!/usr/local/bin/node

const result = process.argv.slice(2)
  .filter(e => e.includes(","))
  .map(e => e.split(","))
  .map(e => [e[0].match(/^https?:\/{2,}(.*?)(?:\/|\?|#|$)/)[1], e[1]])
  .reduce((prev, cur) => prev + "\n" + cur[1] + " " + cur[0], "")

console.log(result)
