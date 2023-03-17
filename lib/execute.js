const puppeteer = require('puppeteer');

const build = (e) => {
  return {
    "labels": {
      "url": e["url"],
      "status": `${e["res"].status()}`
    },
    "value": e["res"].ok() || e["res"].status() == 301 || e["res"].status() == 302 ? 1 : 0
  }
}

async function exec (urls) {
  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const resp = []
  const result = {
    "name": "browser_testing_up",
    "values": [],
  }
  try {
    for(let u of urls) {
      const page = await browser.newPage()
      response = await page.goto(u, {"waitUntil": "networkidle2"})
      resp.push({"url": u, "res": response})
    }
  } catch (e) {
    console.log(e)
  } finally {
    await browser.close();
  }
  result.values = resp.map(build)
  return result
}

module.exports = exec

