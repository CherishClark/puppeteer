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
   // document.querySelector('input[value="0"').click();
    // document.querySelector('button#save-filters-button').click();
})

// await page.$('input[value="0"]');
await page.$('a.link.sheet-close ');
await page.select('#dateFilter');
await page.evaluate(() => {
   // document.querySelector('input[value="0"').click();
    // document.querySelector('button#save-filters-button').click();
})

await page.evaluate(() => {
    document.querySelector('a.link.sheet-close').click();
    document.querySelector('#dateFilter').click();
     document.querySelector('input[value="0"').click();
    document.querySelector('button#save-filters-button').click();
})


  await page.screenshot({path: 'doesthisowrk.png'})


// await page.select('#requestTypeFilter', 'Biking Issues')


        // const sw = await page.select('save-filters-button', 'sidewalks')

  } catch (e) {
      console.log(e);
      return 'nope'
  }
};
run();
