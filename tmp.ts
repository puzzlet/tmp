import * as puppeteer from 'puppeteer';


(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://ko.wikipedia.org/", {waitUntil: 'networkidle2'});

  const nodes = await page.evaluate(findEntry);
  console.log(nodes);

  await browser.close();
})();


function isLeafElement(value: Node, index: number, array: Node[]): boolean {
  return (
    Array.from(value.childNodes)
    .filter((node) => (node.nodeType != Node.TEXT_NODE))
    .length == 0
  );
}


function findEntry() {
  return (
    Array.from(document.querySelectorAll('*'))
    .filter(isLeafElement)
  );
}

