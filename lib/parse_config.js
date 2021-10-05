#!/usr/local/bin/node

const { execSync } = require('child_process');
const fs = require('fs');
const ejs = require('ejs');
const conf = fs.readFileSync('./lib/config.yaml.ejs','utf8');

const content = ejs.render(conf,{
  urls: process.argv.slice(2),
});

fs.writeFile("/tmp/config.yaml", content, (err) => {
  if (err) {console.log(err); process.exit(1);}
});

