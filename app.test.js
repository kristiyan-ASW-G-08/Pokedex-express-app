const puppeteer = require('puppeteer')
describe('index', () => {
  let page;
  let testData
  beforeAll(async () => {
    jest.setTimeout(30000);
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      args: ['--windows-size=1920,1080']
    });
     testData = [
      {
        Brand: 'Lenovo',
        DeviceName: 'Lenovo P70',
        alert_types: 'Vibration; MP3, WAV ringtones',
        announced: '2015, January',
        battery_c: 'Non-removable Li-Po 4000 mAh battery',
        bluetooth: 'v4.0, A2DP'
      }
    ];
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.setRequestInterception(true);
    await page.on('request', request => {
      request.respond({
        content: 'application/json',
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify(testData)
      });
    });
  });
  afterAll(() => {
    browser.close();
  });
  it(`should have title "Home"`, async () => {
    const title = await page.title();
    expect(title).toMatch('Home');
  });
  describe('searching for device',() => {
    beforeAll(async () => {
        await page.waitForSelector('form');
        await page.type('input[name=modelBrand]', 'lenovo');
        await page.type('input[name=modelName]','p70');
        await page.$eval('#submit-btn', btn => btn.click());
        await page.waitForSelector('.table')
  
      });
      //Tests belowe arent currently working
    it(`title should be 'Models'`, async () => {
        const title = await page.title();
        expect(title).toMatch('Models');
      });
  })
});
