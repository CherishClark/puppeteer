const puppeteer = require('puppeteer');
async function run(){
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  try {
    await page.goto('https://saltlakecityut.citysourced.com/servicerequests/nearby')
    const content = await page.content();

      // const sw = await page.select('div', 'viewFiltersModal')
      // const sw = await page.select('#div', 'viewFiltersModal')
// const sw = await page.select('div','#searchBarFilter')

await page.click('div#searchBarFilter')
await page.click('a[data-open-in="sheet"]')
// await page.waitForSelector('value="1005971')
//
// await page.evaluate(() => {
//   document.querySelector('input[value="1005971"]').parentElement.click();
// });
// await page.click('input[value="1005971await page.evaluate(() => {
await page.$('input[value="1005971"');

await page.evaluate(() => {
  // deselect "All Request Types"
   document.querySelector('input[value="-1"').click();
   // Select Biking Issues 1005971
   document.querySelector('input[value="1005971"').click();
   document.querySelector('a.link.sheet-close').click();
})
await page.waitForSelector('input[type="checkbox"]')
await page.$$eval("input[type='checkbox']", checks => checks.forEach(c => c.checked = false));

await page.evaluate(() => {
  let statuses = document.querySelector('#viewFiltersModal > div.view.view-init.popover-view > div.list.no-hairlines.no-hairlines-between.modal-body.input-container > ul > li:nth-child(2) > div > div.item-input-wrap > a > div > div > div.item-after');
  statuses.innerHTML = "Submitted, Received, In Process"

})

await page.select('#dateFilter', '0')

await page.evaluate(() => {
  document.querySelector('button#save-filters-button').click();
})

await page.screenshot({path: 'doesthisowrk.png'})

  } catch (e) {
      console.log(e);
      return 'nope'
  }
};
run();
