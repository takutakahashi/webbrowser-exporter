const puppeteer = require('puppeteer');

const build = (response) => {
  return {
    "labels": {
      "url": response.url()
    },
    "value": response.ok() || response.status() == 301 || response.status() == 302 ? 1 : 0
  }
}

async function exec (urls) {
  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page = await browser.newPage();
  const resp = []
  const result = {
    "name": "browser_testing_up",
    "values": [],
  }
  try {
    for(let u of urls) {
      const response = await page.goto(u)
      resp.push(response)
    }
  } catch {

  } finally {
    await browser.close();
  }
  result.values = resp.map(build)
  return result
}

module.exports = exec

